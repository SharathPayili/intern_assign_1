import React from 'react'
import AnyChart from '../node_modules/anychart-react/dist/anychart-react.min.js'
import anychart from 'anychart'




 function Gantt() {

    var data = [
  {
    name: "4th floor roof",
    progressValue: 0.25,
    id: 1,
    actualStart: "2020-03-19",
    actualEnd: "2020-03-19"
  },
  {
    name: "5th floor columns",
    progressValue: 0.25,
    id: 2,
    actualStart: "2020-03-25",
    actualEnd: "2020-03-26"
  },
  {
    name: "5th floor roof",
    progressValue: 0.25,
    id: 3,
    actualStart: "2020-03-28",
    actualEnd: "2020-08-04"
  },
  {
    name: "1st floor ",
    progressValue: 0.25,
    id: 4,
    actualStart: "2020-01-01",
    actualEnd: "2021-03-31"
  },
  {
    parent: 4,
    name: "BW",
    progressValue: 0.25,
    id: 5,
    actualStart: "2020-03-31",
    actualEnd: "2020-03-31"
  },
  {
    parent: 4,
    name: "1st coat internal plas",
    progressValue: 0.25,
    id: 6,
    actualStart: "2020-09-04",
    actualEnd: "2020-04-30"
  },
  {
    parent: 4,
    name: "2nd coat internal plas",
    progressValue: 0.25,
    id: 7,
    actualStart: "2020-06-22",
    actualEnd: "2020-06-24"
  },
  {
    parent: 4,
    name: "electrical chipping and boxing",
    progressValue: 0.25,
    id: 8,
    actualStart: "2020-03-26",
    actualEnd: "2020-03-31"
  },
  {
    parent: 4,
    name: "drainage-plumbing internal",
    progressValue: 0.25,
    id: 9,
    actualStart: "2020-06-27",
    actualEnd: "2020-07"
  },
  {
    parent: 4,
    name: "false ceiling",
    progressValue: 0.25,
    id: 10,
    actualStart: "2020-07-19",
    actualEnd: "2020-07-21"
  },
  {
    parent: 4,
    name: "wiring",
    progressValue: 0.25,
    id: 11,
    actualStart: "2020-07-22",
    actualEnd: "2020-08-10"
  },
  {
    parent: 4,
    name: "internal putty",
    progressValue: 0.25,
    id: 12,
    actualStart: "2020-06-08",
    actualEnd: "2020-16-09"
  },
  {
    parent: 4,
    name: "flooring tiles",
    progressValue: 0.25,
    id: 13,
    actualStart: "2021-4-01",
    actualEnd: "2021-01-31"
  },
  {
    parent: 4,
    name: "wall tiles",
    progressValue: 0.25,
    id: 14,
    actualStart: "2021-4-01",
    actualEnd: "2021-01-31"
  },
  {
    parent: 4,
    name: "painting",
    progressValue: 0.25,
    id: 15,
    actualStart: "2021-4-01",
    actualEnd: "2021-01-21"
  },
  {
    parent: 4,
    name: "doors",
    progressValue: 0.25,
    id: 16,
    actualStart: "2021-01-10",
    actualEnd: "2021-01-22"
  },
  {
    parent: 4,
    name: "window fixings",
    progressValue: 0.25,
    id: 17,
    actualStart: "2021-11-01",
    actualEnd: "2021-23-01"
  },
  {
    parent: 4,
    name: "sanitary and CP fitings",
    progressValue: 0.25,
    id: 18,
    actualStart: "2021-12-01",
    actualEnd: "2021-01-22"
  },
  {
    parent: 4,
    name: "door polish",
    progressValue: 0.25,
    id: 19,
    actualStart: "2021-11-01",
    actualEnd: "2021-01-31"
  },
  {
    parent: 4,
    name: "door painting",
    progressValue: 0.25,
    id: 20,
    actualStart: "2021-01-28",
    actualEnd: "2021-02-15"
  },
  {
    parent: 4,
    name: "MCB and switches",
    progressValue: 0.25,
    id: 21,
    actualStart: "2021-01-21",
    actualEnd: "2021-02-31"
  },
  {
    parent: 4,
    name: "railings",
    progressValue: 0.25,
    id: 22,
    actualStart: "2021-4-01",
    actualEnd: "2021-7-02"
  },
  {
    name: "2nd floor",
    progressValue: 0.25,
    id: 23,
    actualStart: "2020-03-30",
    actualEnd: "2021-02-28"
  },
  {
    parent: 23,
    name: "BW",
    progressValue: 0.25,
    id: 24,
    actualStart: "2020-03-30",
    actualEnd: "2020-03-30"
  },
  {
    parent: 23,
    name: "1st coat internal plas",
    progressValue: 0.25,
    id: 25,
    actualStart: "2020-8-04",
    actualEnd: "2020-04-30"
  },
  {
    parent: 23,
    name: "2nd coat internal plas",
    progressValue: 0.25,
    id: 26,
    actualStart: "2020-12-06",
    actualEnd: "2020-12-06"
  },
  {
    parent: 23,
    name: "electrical chipping and boxing",
    progressValue: 0.25,
    id: 27,
    actualStart: "2020-03-31",
    actualEnd: "2020-03-31"
  },
  {
    parent: 23,
    name: "drainage-plumbing internal",
    progressValue: 0.25,
    id: 28,
    actualStart: "2020-06-24",
    actualEnd: "2020-12-07"
  },
  {
    parent: 23,
    name: "false ceiling",
    progressValue: 0.25,
    id: 29,
    actualStart: "2020-16-07",
    actualEnd: "2020-08-22"
  },
  {
    parent: 23,
    name: "wiring",
    progressValue: 0.25,
    id: 30,
    actualStart: "2020-06-22",
    actualEnd: "2020-07-10"
  },
  {
    parent: 23,
    name: "internal putty",
    progressValue: 0.25,
    id: 31,
    actualStart: "2020-07-26",
    actualEnd: "2020-12-08"
  },
  {
    parent: 23,
    name: "flooring tiles",
    progressValue: 0.25,
    id: 32,
    actualStart: 2021-"6-01",
    actualEnd: "2021-01-31"
  },
  {
    parent: 23,
    name: "wall tiles",
    progressValue: 0.25,
    id: 33,
    actualStart: "2021-4-01",
    actualEnd: "2021-01-31"
  },
  {
    parent: 23,
    name: "painting",
    progressValue: 0.25,
    id: 34,
    actualStart: "2021-4-01",
    actualEnd: "2021-01-21"
  },
  {
    parent: 23,
    name: "doors",
    progressValue: 0.25,
    id: 35,
    actualStart: "2021-01-10",
    actualEnd: "2021-01-21"
  },
  {
    parent: 23,
    name: "window fixings",
    progressValue: 0.25,
    id: 36,
    actualStart: "2021-01-15",
    actualEnd: "2021-01-31"
  },
  {
    parent: 23,
    name: "sanitary and CP fitings",
    progressValue: 0.25,
    id: 37,
    actualStart: "2021-01-10",
    actualEnd: "2021-01-15"
  },
  {
    parent: 23,
    name: "door polish",
    progressValue: 0.25,
    id: 38,
    actualStart: "2021-01-21",
    actualEnd: "2021-01-31"
  },
  {
    parent: 23,
    name: "door painting",
    progressValue: 0.25,
    id: 39,
    actualStart: "2021-01-02",
    actualEnd: "2021-07-02"
  },
  {
    parent: 23,
    name: "MCB and switches",
    progressValue: 0.25,
    id: 40,
    actualStart: "2021-01-01",
    actualEnd: "2021-01-10"
  },
  {
    parent: 23,
    name: "railings",
    progressValue: 0.25,
    id: 41,
    actualStart: "2021-6-01",
    actualEnd: "2021-01-31"
  },
  {
    name: "3rd floor",
    progressValue: 0.25,
    id: 42,
    actualStart: "2020-03-30",
    actualEnd: "2021-04-10"
  },
  {
    parent: 42,
    name: "BW",
    progressValue: 0.25,
    id: 43,
    actualStart: "2020-03-30",
    actualEnd: "2020-04-10"
  },
  {
    parent: 42,
    name: "1st coat",
    progressValue: 0.25,
    id: 44,
    actualStart: "2020-05-18",
    actualEnd: "2020-07-06"
  },
  {
    parent: 42,
    name: "2nd coat",
    progressValue: 0.25,
    id: 45,
    actualStart: "2020-02-07",
    actualEnd: "2020-02-08"
  },
  {
    parent: 42,
    name: "electrical chipping and boxing",
    progressValue: 0.25,
    id: 46,
    actualStart: "2020-04-24",
    actualEnd: "2020-04-25"
  },
  {
    parent: 42,
    name: "drainage-plumbing internal",
    progressValue: 0.25,
    id: 47,
    actualStart: "2020-07-19",
    actualEnd: "2020-08-14"
  },
  {
    parent: 42,
    name: "false ceiling",
    progressValue: 0.25,
    id: 48,
    actualStart: "2020-07-16",
    actualEnd: "2020-08-22"
  },
  {
    parent: 42,
    name: "wiring",
    progressValue: 0.25,
    id: 49,
    actualStart: "2020-07-19",
    actualEnd: "2020-08-14"
  },
  {
    parent: 42,
    name: "putty",
    progressValue: 0.25,
    id: 50,
    actualStart: "2020-08-26",
    actualEnd: "2020-09-14"
  },
  {
    parent: 42,
    name: "flooring tiles",
    progressValue: 0.25,
    id: 51,
    actualStart: "2021-09-01",
    actualEnd: "2021-07-02"
  },
  {
    parent: 42,
    name: "wall tiles",
    progressValue: 0.25,
    id: 52,
    actualStart: "2021-01-10",
    actualEnd: "2021-02-10"
  },
  {
    parent: 42,
    name: "painting",
    progressValue: 0.25,
    id: 53,
    actualStart: "2021-01-15",
    actualEnd: "2021-01-31"
  },
  {
    parent: 42,
    name: "doors",
    progressValue: 0.25,
    id: 54,
    actualStart: "2021-12-01",
    actualEnd: "2021-01-15"
  },
  {
    parent: 42,
    name: "window fixings",
    progressValue: 0.25,
    id: 55,
    actualStart: "2021-02-02",
    actualEnd: "2021-02-15"
  },
  {
    parent: 42,
    name: "sanitary and CP fitings",
    progressValue: 0.25,
    id: 56,
    actualStart: "2021-01-16",
    actualEnd: "2021-01-31"
  },
  {
    parent: 42,
    name: "door polish",
    progressValue: 0.25,
    id: 57,
    actualStart: "2021-01-01",
    actualEnd: "2021-01-31"
  },
  {
    parent: 42,
    name: "door painting",
    progressValue: 0.25,
    id: 58,
    actualStart: "2021-01-10",
    actualEnd: "2021-01-15"
  },
  {
    parent: 42,
    name: "MCB and switches",
    progressValue: 0.25,
    id: 59,
    actualStart: "2021-01-01",
    actualEnd: "2021-01-21"
  },
  {
    parent: 42,
    name: "railings",
    progressValue: 0.25,
    id: 60,
    actualStart: "2021-09-01",
    actualEnd: "2021-07-02"
  },
  {
    name: "4th floor",
    progressValue: 0.25,
    id: 61,
    actualStart: "2020-03-31",
    actualEnd: "2021-04-14"
  },
  {
    parent: 61,
    name: "BW",
    progressValue: 0.25,
    id: 62,
    actualStart: "2020-03-31",
    actualEnd: "2020-04-14"
  },
  {
    parent: 61,
    name: "1st coat",
    progressValue: 0.25,
    id: 63,
    actualStart: "2020-05-16",
    actualEnd: "2020-06-14"
  },
  {
    parent: 61,
    name: "2nd coat",
    progressValue: 0.25,
    id: 64,
    actualStart: "2020-11-07",
    actualEnd: "2020-11-07"
  },
  {
    parent: 61,
    name: "electrical chipping and boxing",
    progressValue: 0.25,
    id: 65,
    actualStart: "2020-04-24",
    actualEnd: "2020-04-24"
  },
  {
    parent: 61,
    name: "drainage-plumbing internal",
    progressValue: 0.25,
    id: 66,
    actualStart: "2020-07-23",
    actualEnd: "2020-08-14"
  },
  {
    parent: 61,
    name: "false ceiling",
    progressValue: 0.25,
    id: 67,
    actualStart: "2020-07-19",
    actualEnd: "2020-08-08"
  },
  {
    parent: 61,
    name: "wiring",
    progressValue: 0.25,
    id: 68,
    actualStart: "2020-01-10",
    actualEnd: "2020-10-30"
  },
  {
    parent: 61,
    name: "putty",
    progressValue: 0.25,
    id: 69,
    actualStart: "2020-08-27",
    actualEnd: "2020-09"
  },
  {
    parent: 61,
    name: "flooring tiles",
    progressValue: 0.25,
    id: 70,
    actualStart: "2021-11-01",
    actualEnd: "2021-07-02"
  },
  {
    parent: 61,
    name: "wall tiles",
    progressValue: 0.25,
    id: 71,
    actualStart: "2021-01-01",
    actualEnd: "2021-01-15"
  },
  {
    parent: 61,
    name: "painting",
    progressValue: 0.25,
    id: 72,
    actualStart: "2021-01-15",
    actualEnd: "2021-01-21"
  },
  {
    parent: 61,
    name: "doors",
    progressValue: 0.25,
    id: 73,
    actualStart: "2021-01-16",
    actualEnd: "2021-01-31"
  },
  {
    parent: 61,
    name: "window fixings",
    progressValue: 0.25,
    id: 74,
    actualStart: "2021-01-01",
    actualEnd: 2021-"2-02"
  },
  {
    parent: 61,
    name: "sanitary and CP fitings",
    progressValue: 0.25,
    id: 75,
    actualStart: "2021-07-02",
    actualEnd: "2021-02-15"
  },
  {
    parent: 61,
    name: "door polish",
    progressValue: 0.25,
    id: 76,
    actualStart: "2021-02-15",
    actualEnd: "2021-02-25"
  },
  {
    parent: 61,
    name: "door painting",
    progressValue: 0.25,
    id: 77,
    actualStart: "2021-01-02",
    actualEnd: "2021-02-31"
  },
  {
    parent: 61,
    name: "MCB and switches",
    progressValue: 0.25,
    id: 78,
    actualStart: "2021-01-15",
    actualEnd: "2021-01-21"
  },
  {
    parent: 61,
    name: "railings",
    progressValue: 0.25,
    id: 79,
    actualStart: "2021-01-13",
    actualEnd: "2021-07-02"
  },
  {
    name: "5th floor",
    progressValue: 0.25,
    id: 80,
    actualStart: "2020-04-24",
    actualEnd: "2020-05-14"
  },
  {
    parent: 80,
    name: "BW",
    progressValue: 0.25,
    id: 81,
    actualStart: "2020-04-24",
    actualEnd: "2020-05-14"
  },
  {
    parent: 80,
    name: "1st coat plas",
    progressValue: 0.25,
    id: 82,
    actualStart: "2020-06-24",
    actualEnd: "2020-09-07"
  },
  {
    parent: 80,
    name: "2nd coat plas",
    progressValue: 0.25,
    id: 83,
    actualStart: "2020-11-08",
    actualEnd: "2020-11-08"
  },
  {
    parent: 80,
    name: "electrical chipping and boxing",
    progressValue: 0.25,
    id: 84,
    actualStart: "2020-05-21",
    actualEnd: "2020-05-21"
  },
  {
    parent: 80,
    name: "drainage-plumbing internal",
    progressValue: 0.25,
    id: 85,
    actualStart: "2020-07-22",
    actualEnd: "2020-16-08"
  },
  {
    parent: 80,
    name: "false ceiling",
    progressValue: 0.25,
    id: 86,
    actualStart: "2020-07-19",
    actualEnd: "2020-08-24"
  },
  {
    parent: 80,
    name: "wiring",
    progressValue: 0.25,
    id: 87,
    actualStart: "2020-01-10",
    actualEnd: "2020-10-30"
  },
  {
    parent: 80,
    name: "putty",
    progressValue: 0.25,
    id: 88,
    actualStart: "2020-06-09",
    actualEnd: "2020-10-10"
  },
  {
    parent: 80,
    name: "flooring tiles",
    progressValue: 0.25,
    id: 89,
    actualStart: "2021-01-15",
    actualEnd: "2021-07-02"
  },
  {
    parent: 80,
    name: "wall tiles",
    progressValue: 0.25,
    id: 90,
    actualStart: "2021-01-01",
    actualEnd: "2021-01-31"
  },
  {
    parent: 80,
    name: "painting",
    progressValue: 0.25,
    id: 91,
    actualStart: "2021-01-21",
    actualEnd: "2021-01-02"
  },
  {
    parent: 80,
    name: "doors",
    progressValue: 0.25,
    id: 92,
    actualStart: "2021-01-15",
    actualEnd: "2021-11-02"
  },
  {
    parent: 80,
    name: "window fixings",
    progressValue: 0.25,
    id: 93,
    actualStart: "2021-07-02",
    actualEnd: "2021-02-15"
  },
  {
    parent: 80,
    name: "sanitary and CP fitings",
    progressValue: 0.25,
    id: 94,
    actualStart: "2021-02-15",
    actualEnd: "2021-02-21"
  },
  {
    parent: 80,
    name: "door polish",
    progressValue: 0.25,
    id: 95,
    actualStart: "2021-01-02",
    actualEnd: "2021-06-02"
  },
  {
    parent: 80,
    name: "door painting",
    progressValue: 0.25,
    id: 96,
    actualStart: "2021-01-01",
    actualEnd: "2021-02-02"
  },
  {
    parent: 80,
    name: "MCB and switches",
    progressValue: 0.25,
    id: 97,
    actualStart: "2021-01-14",
    actualEnd: "2021-01-24"
  },
  {
    parent: 80,
    name: "railings",
    progressValue: 0.25,
    id: 98,
    actualStart: "2021-01",
    actualEnd: "2021-07-02"
  },
  {
    name: "EXTERNAL",
    progressValue: 0.25,
    id: 99
  },
  {
    parent: 99,
    name: "elevation 1st coating plas",
    progressValue: 0.25,
    id: 100,
    actualStart: "2020-01-06",
    actualEnd: "2020-06-30"
  },
  {
    parent: 99,
    name: "remaning exterior 1st coating plas",
    progressValue: 0.25,
    id: 101,
    actualStart: "2020-05-06",
    actualEnd: "2021-06-30"
  },
  {
    parent: 99,
    name: "elevation 2nd coating plas",
    progressValue: 0.25,
    id: 102,
    actualStart: "2020-07-08",
    actualEnd: "2020-07-27"
  },
  {
    parent: 99,
    name: "remaning exterior 2nd coating plas",
    progressValue: 0.25,
    id: 103,
    actualStart: "2020-07-08",
    actualEnd: "2020-07-27"
  },
  {
    parent: 99,
    name: "drainage external",
    progressValue: 0.25,
    id: 104,
    actualStart: "2020-07-08",
    actualEnd: "2020-07-30"
  },
  {
    parent: 99,
    name: "putty external",
    progressValue: 0.25,
    id: 105,
    actualStart: "2020-10-24",
    actualEnd: "2020-11-30"
  },
  {
    parent: 99,
    name: "painting external",
    progressValue: 0.25,
    id: 106,
    actualStart: "2020-12",
    actualEnd: "2021-08-01"
  },
  {
    name: "common amenities",
    progressValue: 0.25,
    id: 107
  },
  {
    parent: 107,
    name: "1st floor ",
    progressValue: 0.25,
    id: 108
  },
  {
    parent: 108,
    name: "corridor flooring",
    progressValue: 0.25,
    id: 109,
    actualStart: "2020-01-12",
    actualEnd: "2021-08-01"
  },
  {
    parent: 108,
    name: "stair case",
    progressValue: 0.25,
    id: 110,
    actualStart: "2020-01-12",
    actualEnd: "2021-08-01"
  },
  {
    parent: 108,
    name: "lift works",
    progressValue: 0.25,
    id: 111,
    actualStart: "2020-01-12",
    actualEnd: "2021-08-01"
  },
  {
    parent: 108,
    name: "electrical",
    progressValue: 0.25,
    id: 112,
    actualStart: "2020-01-12",
    actualEnd: "2021-08-01"
  },
  {
    parent: 108,
    name: "false ceiling ",
    progressValue: 0.25,
    id: 113,
    actualStart: "2020-01-12",
    actualEnd: "2021-08-01"
  },
  {
    parent: 108,
    name: "painitng",
    progressValue: 0.25,
    id: 114,
    actualStart: "2020-01-12",
    actualEnd: "2021-08-01"
  },
  {
    parent: 107,
    name: "2nd floor",
    progressValue: 0.25,
    id: 115
  },
  {
    parent: 115,
    name: "corridor flooring",
    progressValue: 0.25,
    id: 116,
    actualStart: "2020-01-12",
    actualEnd: "2021-08-01"
  },
  {
    parent: 115,
    name: "stair case",
    progressValue: 0.25,
    id: 117,
    actualStart: "2020-01-12",
    actualEnd: "2021-08-01"
  },
  {
    parent: 115,
    name: "lift works",
    progressValue: 0.25,
    id: 118,
    actualStart: "2020-01-12",
    actualEnd: "2021-08-01"
  },
  {
    parent: 115,
    name: "electrical",
    progressValue: 0.25,
    id: 119,
    actualStart: "2020-01-12",
    actualEnd: "2021-08-01"
  },
  {
    parent: 115,
    name: "false ceiling ",
    progressValue: 0.25,
    id: 120,
    actualStart: "2020-01-12",
    actualEnd: "2021-08-01"
  },
  {
    parent: 115,
    name: "painitng",
    progressValue: 0.25,
    id: 121,
    actualStart: "2020-01-12",
    actualEnd: "2021-08-01"
  },
  {
    parent: 107,
    name: "3rd floor",
    progressValue: 0.25,
    id: 122
  },
  {
    parent: 122,
    name: "corridor flooring",
    progressValue: 0.25,
    id: 123,
    actualStart: "2020-01-12",
    actualEnd: "2021-08-01"
  },
  {
    parent: 122,
    name: "stair case",
    progressValue: 0.25,
    id: 124,
    actualStart: "2020-01-12",
    actualEnd: "2021-08-01"
  },
  {
    parent: 122,
    name: "lift works",
    progressValue: 0.25,
    id: 125,
    actualStart: "2020-01-12",
    actualEnd: "2021-08-01"
  },
  {
    parent: 122,
    name: "electrical",
    progressValue: 0.25,
    id: 126,
    actualStart: "2020-01-12",
    actualEnd: "2021-08-01"
  },
  {
    parent: 122,
    name: "false ceiling ",
    progressValue: 0.25,
    id: 127,
    actualStart: "2020-01-12",
    actualEnd: "2021-08-01"
  },
  {
    parent: 122,
    name: "painting",
    progressValue: 0.25,
    id: 128,
    actualStart: "2020-01-12",
    actualEnd: "2021-08-01"
  },
  {
    parent: 107,
    name: "4th floor",
    progressValue: 0.25,
    id: 129
  },
  {
    parent: 129,
    name: "corridor flooring",
    progressValue: 0.25,
    id: 130,
    actualStart: "2020-01-12",
    actualEnd: "2021-08-01"
  },
  {
    parent: 129,
    name: "stair case",
    progressValue: 0.25,
    id: 131,
    actualStart: "2020-01-12",
    actualEnd: "2021-08-01"
  },
  {
    parent: 129,
    name: "lift works",
    progressValue: 0.25,
    id: 132,
    actualStart: "2020-01-12",
    actualEnd: "2021-08-01"
  },
  {
    parent: 129,
    name: "electrical",
    progressValue: 0.25,
    id: 133,
    actualStart: "2020-01-12",
    actualEnd: "2021-08-01"
  },
  {
    parent: 129,
    name: "false ceiling ",
    progressValue: 0.25,
    id: 134,
    actualStart: "2020-01-12",
    actualEnd: "2021-08-01"
  },
  {
    parent: 129,
    name: "painting",
    progressValue: 0.25,
    id: 135,
    actualStart: "2020-01-12",
    actualEnd: "2021-08-01"
  },
  {
    parent: 107,
    name: "5th floor",
    progressValue: 0.25,
    id: 136
  },
  {
    parent: 136,
    name: "corridor flooring",
    progressValue: 0.25,
    id: 137,
    actualStart: "2020-01-12",
    actualEnd: "2021-08-01"
  },
  {
    parent: 136,
    name: "stair case",
    progressValue: 0.25,
    id: 138,
    actualStart: "2020-01-12",
    actualEnd: "2021-08-01"
  },
  {
    parent: 136,
    name: "lift works",
    progressValue: 0.25,
    id: 139,
    actualStart: "2020-01-12",
    actualEnd: "2021-08-01"
  },
  {
    parent: 136,
    name: "painting",
    progressValue: 0.25,
    id: 140,
    actualStart: "2020-01-12",
    actualEnd: "2021-08-01"
  },
  {
    name: "Cellar",
    progressValue: 0.25,
    id: 141
  },
  {
    parent: 141,
    name: "RW 1st coat plastering",
    progressValue: 0.25,
    id: 142,
    actualStart: "2020-12-15",
    actualEnd: "2021-07-02"
  },
  {
    parent: 141,
    name: "RW 2nd coat plastering",
    progressValue: 0.25,
    id: 143,
    actualStart: "2020-12-15",
    actualEnd: "2021-07-02"
  },
  {
    parent: 141,
    name: "ceiling 1st coat",
    progressValue: 0.25,
    id: 144,
    actualStart: "2020-12-15",
    actualEnd: "2021-07-02"
  },
  {
    parent: 141,
    name: "ceiling 2nd coat",
    progressValue: 0.25,
    id: 145,
    actualStart: "2020-12-15",
    actualEnd: "2021-07-02"
  },
  {
    parent: 141,
    name: "electrical wiring",
    progressValue: 0.25,
    id: 146,
    actualStart: "2020-12-15",
    actualEnd: "2021-07-02"
  },
  {
    parent: 141,
    name: "VDF flooring",
    progressValue: 0.25,
    id: 147,
    actualStart: "2020-12-15",
    actualEnd: "2021-07-02"
  },
  {
    parent: 141,
    name: "waste water Collection pit",
    progressValue: 0.25,
    id: 148,
    actualStart: "2020-12-15",
    actualEnd: "2021-07-02"
  },
  {
    parent: 141,
    name: "staircase",
    progressValue: 0.25,
    id: 149,
    actualStart: "2020-12-15",
    actualEnd: "2021-07-02"
  },
  {
    name: "stilt",
    progressValue: 0.25,
    id: 150
  },
  {
    parent: 150,
    name: "BW office & security room",
    progressValue: 0.25,
    id: 151,
    actualStart: "2021-05-01",
    actualEnd: "2021-02-10"
  },
  {
    parent: 150,
    name: "pl 1st coat column & ceiling",
    progressValue: 0.25,
    id: 152,
    actualStart: "2021-05-01",
    actualEnd: "2021-02-10"
  },
  {
    parent: 150,
    name: "pl 2nd coat column & ceiling",
    progressValue: 0.25,
    id: 153,
    actualStart: "2021-05-01",
    actualEnd: "2021-02-10"
  },
  {
    parent: 150,
    name: "VDF flooring",
    progressValue: 0.25,
    id: 154,
    actualStart: "2021-05-01",
    actualEnd: "2021-02-10"
  },
  {
    parent: 150,
    name: "compound wall basement",
    progressValue: 0.25,
    id: 155,
    actualStart: "2021-05-01",
    actualEnd: "2021-02-10"
  },
  {
    parent: 150,
    name: "compound wall BW",
    progressValue: 0.25,
    id: 156,
    actualStart: "2021-05-01",
    actualEnd: "2021-02-10"
  },
  {
    parent: 150,
    name: "compound wall plastering",
    progressValue: 0.25,
    id: 157,
    actualStart: "2021-05-01",
    actualEnd: "2021-02-10"
  },
  {
    parent: 150,
    name: "compound wall putty",
    progressValue: 0.25,
    id: 158,
    actualStart: "2021-05-01",
    actualEnd: "2021-02-10"
  },
  {
    parent: 150,
    name: "Main Gate",
    progressValue: 0.25,
    id: 159,
    actualStart: "2021-05-01",
    actualEnd: "2021-02-10"
  },
  {
    parent: 150,
    name: "painting",
    progressValue: 0.25,
    id: 160,
    actualStart: "2021-05-01",
    actualEnd: "2021-02-10"
  },
  {
    parent: 150,
    name: "stair case railing",
    progressValue: 0.25,
    id: 161,
    actualStart: "2021-05-01",
    actualEnd: "2021-02-10"
  }
]

  var chart = anychart.ganttProject(); 
  chart.data(data, 'as-table');
  chart.title('Create a Gantt Project chart');

    return (
        <div>
            <h1>Hello world</h1>
      <AnyChart width="100%"
    height={600} instance={chart}  />
        </div>
    )
};



export default Gantt;
