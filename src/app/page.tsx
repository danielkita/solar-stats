
import { Diagram } from "@/components/Diagram";
import { getData } from "@/app/getData";

const data = [
  {
    "id": "japan",
    "color": "hsl(230, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 290
      },
      {
        "x": "helicopter",
        "y": 218
      },
      {
        "x": "boat",
        "y": 155
      },
      {
        "x": "train",
        "y": 262
      },
      {
        "x": "subway",
        "y": 17
      },
      {
        "x": "bus",
        "y": 15
      },
      {
        "x": "car",
        "y": 261
      },
      {
        "x": "moto",
        "y": 14
      },
      {
        "x": "bicycle",
        "y": 37
      },
      {
        "x": "horse",
        "y": 77
      },
      {
        "x": "skateboard",
        "y": 233
      },
      {
        "x": "others",
        "y": 70
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(128, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 55
      },
      {
        "x": "helicopter",
        "y": 202
      },
      {
        "x": "boat",
        "y": 31
      },
      {
        "x": "train",
        "y": 191
      },
      {
        "x": "subway",
        "y": 204
      },
      {
        "x": "bus",
        "y": 281
      },
      {
        "x": "car",
        "y": 6
      },
      {
        "x": "moto",
        "y": 7
      },
      {
        "x": "bicycle",
        "y": 25
      },
      {
        "x": "horse",
        "y": 82
      },
      {
        "x": "skateboard",
        "y": 57
      },
      {
        "x": "others",
        "y": 193
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(29, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 171
      },
      {
        "x": "helicopter",
        "y": 29
      },
      {
        "x": "boat",
        "y": 67
      },
      {
        "x": "train",
        "y": 88
      },
      {
        "x": "subway",
        "y": 144
      },
      {
        "x": "bus",
        "y": 85
      },
      {
        "x": "car",
        "y": 288
      },
      {
        "x": "moto",
        "y": 192
      },
      {
        "x": "bicycle",
        "y": 4
      },
      {
        "x": "horse",
        "y": 215
      },
      {
        "x": "skateboard",
        "y": 14
      },
      {
        "x": "others",
        "y": 208
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(80, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 22
      },
      {
        "x": "helicopter",
        "y": 71
      },
      {
        "x": "boat",
        "y": 81
      },
      {
        "x": "train",
        "y": 85
      },
      {
        "x": "subway",
        "y": 6
      },
      {
        "x": "bus",
        "y": 68
      },
      {
        "x": "car",
        "y": 213
      },
      {
        "x": "moto",
        "y": 87
      },
      {
        "x": "bicycle",
        "y": 201
      },
      {
        "x": "horse",
        "y": 132
      },
      {
        "x": "skateboard",
        "y": 213
      },
      {
        "x": "others",
        "y": 146
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(241, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 272
      },
      {
        "x": "helicopter",
        "y": 102
      },
      {
        "x": "boat",
        "y": 251
      },
      {
        "x": "train",
        "y": 23
      },
      {
        "x": "subway",
        "y": 109
      },
      {
        "x": "bus",
        "y": 46
      },
      {
        "x": "car",
        "y": 88
      },
      {
        "x": "moto",
        "y": 37
      },
      {
        "x": "bicycle",
        "y": 86
      },
      {
        "x": "horse",
        "y": 277
      },
      {
        "x": "skateboard",
        "y": 280
      },
      {
        "x": "others",
        "y": 95
      }
    ]
  }
]


export default async function Home() {
  const dbData = await getData();

  return (
    <div className="h-screen">
      <Diagram data={dbData} />
    </div>
  );
}


