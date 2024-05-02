"use server";

import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import { solarData } from "../db/schema";

const sqlite = new Database("sqlite.db");
const db = drizzle(sqlite);

export const getData = async () => {
  const result = await db.select().from(solarData);
  const hourlyData = [];
  const hourlySoFarData = [];
  const currentData = [];

  let hourlySoFar = 0

  result.forEach((item, index) => {
    hourlyData.push(item.yieldHourly);
    hourlySoFar += item.yieldHourly;
    hourlySoFarData.push(hourlySoFar);
    currentData.push(item.currentYield);
  });

  return [
    {
      id: "hourly",
      data: hourlyData.map((value, index) => ({
        x: index,
        y: value,
      })),
    },
    {
      id: "hourlySoFar",
      data: hourlySoFarData.map((value, index) => ({
        x: index,
        y: value,
      })),
    },
    {
      id: "current",
      data: currentData.map((value, index) => ({
        x: index,
        y: value,
      })),
    },
  ];
};
