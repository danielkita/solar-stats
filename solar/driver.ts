import "dotenv/config";
import { solarData } from "../src/db/schema";
import Database from "better-sqlite3";
import { and, desc, gte, ne } from "drizzle-orm";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { startOfDay, endOfDay } from "date-fns";

const todayStart = startOfDay(new Date());
const todayEnd = endOfDay(new Date());

const SOLAR_URL = process.env.SOLAR_URL;
const SOLAR_PASS = process.env.SOLAR_PASS;

function extractVariableValue(text: string, variableName: string) {
  const regex = new RegExp(
    `var\\s+${variableName}\\s*=\\s*"?(\\d+\\.?\\d*)"?;`,
    "i"
  );
  const match = text.match(regex);

  if (match && match.length > 1) {
    return match[1];
  } else {
    return null;
  }
}

const getData = async () => {
  try {
    const response = await fetch(SOLAR_URL, {
      headers: {
        Authorization:
          "Basic " + Buffer.from(SOLAR_PASS, "binary").toString("base64"),
      },
    });
    const text = await response.text();
    const now = extractVariableValue(text, "webdata_now_p");
    const today = extractVariableValue(text, "webdata_today_e");
    return {
      now,
      today,
    };
  } catch (e) {
    console.error(e);
    return {
      now: 0,
      today: 0,
    };
  }
};

const insert = async () => {
  const data = await getData();
  const sqlite = new Database("sqlite.db");
  const db = drizzle(sqlite);
  const getLatest = await db
    .select()
    .from(solarData)
    .where(
      and(
        gte(solarData.timestamp, +todayStart),
        ne(solarData.timestamp, +todayEnd)
      )
    )
    .orderBy(desc(solarData.timestamp));

  const sumOfTodaySoFar = getLatest.reduce((acc, curr) => {
    return acc + curr.yieldHourly;
  }, 0);

  const lastHourYield = sumOfTodaySoFar
    ? Number((Number(data.today) - sumOfTodaySoFar).toFixed(2))
    : Number(data.today);

  await db
    .insert(solarData)
    .values({ yieldHourly: lastHourYield, currentYield: Number(data.now) });
  console.log("all good");
};

const run = () => {
  insert();
};

run();
