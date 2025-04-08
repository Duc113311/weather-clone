import i18n from "../locales/i18n";
function initMoonPhaseTable() {
  return [
    { phase: "New_Moon", range: [0.0, 1.0] },
    { phase: "Waxing_Crescent", range: [1.0, 2.0765294] },
    { phase: "Waxing_Crescent", range: [2.0765294, 3.1530588] },
    { phase: "Waxing_Crescent", range: [3.1530588, 4.2295882] },
    { phase: "Waxing_Crescent", range: [4.2295882, 5.3061176] },
    { phase: "Waxing_Crescent", range: [5.3061176, 6.382647] },
    { phase: "First_Quarter", range: [6.382647, 8.382647] },
    { phase: "Waxing_Gibbous", range: [8.382647, 9.4591764] },
    { phase: "Waxing_Gibbous", range: [9.4591764, 10.5357058] },
    { phase: "Waxing_Gibbous", range: [10.5357058, 11.6122352] },
    { phase: "Waxing_Gibbous", range: [11.6122352, 12.6887646] },
    { phase: "Waxing_Gibbous", range: [12.6887646, 13.765294] },
    { phase: "Full_Moon", range: [13.765294, 15.765294] },
    { phase: "Waning_Gibbous", range: [15.765294, 16.8418234] },
    { phase: "Waning_Gibbous", range: [16.8418234, 17.9183528] },
    { phase: "Waning_Gibbous", range: [17.9183528, 18.9948822] },
    { phase: "Waning_Gibbous", range: [18.9948822, 20.0714116] },
    { phase: "Waning_Gibbous", range: [20.0714116, 21.147941] },
    { phase: "Third_Quarter", range: [21.147941, 23.147941] },
    { phase: "Waning_Crescent", range: [23.147941, 24.2244704] },
    {
      phase: "Waning_Crescent",
      range: [24.2244704, 25.3019998],
    },
    {
      phase: "Waning_Crescent",
      range: [25.3019998, 26.3785292],
    },
    {
      phase: "Waning_Crescent",
      range: [26.3785292, 27.4550586],
    },
    { phase: "Waning_Crescent", range: [27.4550586, 28.530588] },
    { phase: "New_Moon", range: [28.530588, 29.530588] },
  ];
}

export function getMoonPhase(desiredDate) {
  // Xác định ngày tham chiếu và số ngày của tháng lặp
  const referenceDate = new Date(2021, 0, 13); // Tháng 1 là tháng 0
  const synodicMonthDays = 29.53058770576;

  // Tính số ngày kể từ ngày tham chiếu
  const msPerDay = 1000 * 60 * 60 * 24; // milliseconds mỗi ngày
  const daysSinceReference = Math.floor(
    (desiredDate - referenceDate) / msPerDay
  );

  // Tính số lượng trăng mới đã qua
  const newMoonsElapsed = daysSinceReference / synodicMonthDays;

  // Tính phần dư và ngày mặt trăng
  const fractionalPart = newMoonsElapsed - Math.floor(newMoonsElapsed);
  let lunarDay = fractionalPart * synodicMonthDays;

  // Đảm bảo ngày mặt trăng nằm trong khoảng từ 0 đến synodicMonthDays
  if (lunarDay < 0) {
    lunarDay += synodicMonthDays;
  }

  const moonPhaseTable = initMoonPhaseTable();

  // Tìm pha mặt trăng tương ứng
  const moonPhase =
    moonPhaseTable.find(
      (phase) => lunarDay > phase.range[0] && lunarDay <= phase.range[1]
    )?.phase || "";

  let percentage = -1.0;
  let isLightFromStart = false;

  if (lunarDay >= 0.0 && lunarDay <= 14.765294) {
    percentage = ((lunarDay - 0.0) / (14.765294 - 0.0)) * 100;
    isLightFromStart = true;
  } else if (lunarDay > 14.765294 && lunarDay <= 29.530588) {
    percentage = ((29.530588 - lunarDay) / (29.530588 - 14.765294)) * 100;
    isLightFromStart = false;
  }

  return { moonPhase, percentage, isLightFromStart };
}

import {
  Illumination,
  Body,
  Libration,
  EclipticGeoMoon,
  SearchRiseSet,
  Observer,
  Equator,
  Horizon,
  SearchMoonPhase,
} from "astronomy-engine";

export function getInfoMoonPhase(date, lat, long) {
  //================================================================
  const illum = Illumination(Body.Moon, date);
  let illumination = (illum.phase_fraction * 100).toFixed(2);

  //================================================================
  const diamDeg = Libration(date).diam_deg;
  const midDiamDeg = (0.5383 + 0.4924) / 2;
  const rotation = 720 * (diamDeg - midDiamDeg);

  //================================================================
  const moonDistance = EclipticGeoMoon(date).dist * 149600000;

  //
  const moonLongitude = EclipticGeoMoon(date).lon;
  // Danh sách cung hoàng đạo
  const zodiacSigns = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces",
  ];
  // Tính chỉ số cung hoàng đạo dựa trên kinh độ của mặt trăng
  const moonSignIndex = Math.floor(((moonLongitude + 360) % 360) / 30);
  const moonSign = zodiacSigns[moonSignIndex];

  //================================================================
  let observer = new Observer(lat, long, 1.0);
  let resultMoonRise = SearchRiseSet(Body.Moon, observer, +1, date, 1, 0);
  if (resultMoonRise == null) {
    resultMoonRise = "--";
  } else {
    resultMoonRise = resultMoonRise.date;
    const formattedHours = resultMoonRise
      .getHours()
      .toString()
      .padStart(2, "0");
    const formattedMinutes = resultMoonRise
      .getMinutes()
      .toString()
      .padStart(2, "0");
    resultMoonRise = `${formattedHours}:${formattedMinutes}`;
  }
  let resultMoonSet = SearchRiseSet(Body.Moon, observer, -1, date, 1, 0);
  if (resultMoonSet == null) {
    resultMoonSet = "--";
  } else {
    resultMoonSet = resultMoonSet.date;
    const formattedHours = resultMoonSet.getHours().toString().padStart(2, "0");
    const formattedMinutes = resultMoonSet
      .getMinutes()
      .toString()
      .padStart(2, "0");
    resultMoonSet = `${formattedHours}:${formattedMinutes}`;
  }

  //================================================================
  let equ_ofdate = Equator(Body.Moon, date, observer, true, true);
  let hor = Horizon(date, observer, equ_ofdate.ra, equ_ofdate.dec, "normal");

  let dataMoonRise = SearchRiseSet(Body.Moon, observer, +1, date, 1, 0);
  let dataMoonSet = SearchRiseSet(Body.Moon, observer, -1, date, 1, 0);

  let horMoonRise = Horizon(
    dataMoonRise != null ? dataMoonRise.date : date,
    observer,
    equ_ofdate.ra,
    equ_ofdate.dec,
    "normal"
  );
  let horMoonSet = Horizon(
    dataMoonSet != null ? dataMoonSet.date : date,
    observer,
    equ_ofdate.ra,
    equ_ofdate.dec,
    "normal"
  );

  const azimuthMoonRise = horMoonRise.azimuth;
  const azimuthMoonSet = horMoonSet.azimuth;

  const altitudeMoonRise = horMoonRise.altitude;
  const altitudeMoonSet = horMoonSet.altitude;

  //================================================================
  const nextFullMoon = SearchMoonPhase(180, date, 31);
  const nextNewMoon = SearchMoonPhase(0, date, 31);
  // Tính số ngày giữa ngày hiện tại và nextNewMoon
  const diffTimeNewMoon = nextNewMoon.date - date; // Sự khác biệt tính bằng mili giây
  const diffDaysNewMoon = Math.ceil(diffTimeNewMoon / (1000 * 60 * 60 * 24)); // Chuyển đổi từ mili giây thành ngày
  // Tính số ngày giữa ngày hiện tại và nextFullMoon
  const diffTimeFullMoon = nextFullMoon.date - date; // Sự khác biệt tính bằng mili giây
  const diffDaysFullMoon = Math.ceil(diffTimeFullMoon / (1000 * 60 * 60 * 24)); // Chuyển đổi từ mili giây thành ngày

  //================================================================
  const moonPhase = getMoonPhase(date);
  return {
    date: date,
    moonPhaseName: moonPhase.moonPhase,
    illumination: illumination,
    moonset: resultMoonSet,
    moonrise: resultMoonRise,
    nextFullMoon: diffDaysFullMoon - 1,
    nextNewMoon: diffDaysNewMoon - 1,
    distance: moonDistance.toFixed(3),
    altitudeMoonRise: altitudeMoonRise.toFixed(1),
    azimuthMoonRise: azimuthMoonRise.toFixed(0),
    altitudeMoonSet: altitudeMoonSet.toFixed(1),
    azimuthMoonSet: azimuthMoonSet.toFixed(0),
    moonSign: moonSign,
    moonPhasePercentage: moonPhase.percentage,
  };
}

export async function convertAltitude(dateValue, lat, long) {
  try {
    const date = new Date(dateValue);
    let observer2 = new Observer(lat, long, 1.0);
    let equ_ofdate = Equator(Body.Sun, date, observer2, true, true);
    let hor = Horizon(date, observer2, equ_ofdate.ra, equ_ofdate.dec, "normal");

    let dataMoonRise = SearchRiseSet(Body.Sun, observer2, +1, date, 1, 0);
    let dataMoonSet = SearchRiseSet(Body.Sun, observer2, -1, date, 1, 0);

    let horMoonRise = Horizon(
      dataMoonRise != null ? dataMoonRise.date : date,
      observer2,
      equ_ofdate.ra,
      equ_ofdate.dec,
      "normal"
    );
    let horMoonSet = Horizon(
      dataMoonSet != null ? dataMoonSet.date : date,
      observer2,
      equ_ofdate.ra,
      equ_ofdate.dec,
      "normal"
    );

    const azimuthMoonRise = horMoonRise.azimuth;
    const azimuthMoonSet = horMoonSet.azimuth;

    const altitudeMoonRise = horMoonRise.altitude;
    const altitudeMoonSet = horMoonSet.altitude;
    return {
      azimuthMoonRise,
      azimuthMoonSet,
      altitudeMoonRise,
      altitudeMoonSet,
    };
  } catch (error) {
    console.error("An error occurred during altitude conversion:", error);
    return {
      azimuthMoonRise: null,
      azimuthMoonSet: null,
      altitudeMoonRise: null,
      altitudeMoonSet: null,
      error: error.message,
    };
  }
}
