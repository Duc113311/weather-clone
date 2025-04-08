import i18n from "../locales/i18n";
import { useRoute } from "vue-router";
import { convertToLowCase, convertToSlugCity } from "@/utils/coverTextSystem";

export function setTitleScream(activeIndex, breadcumsObject, languageParam) {
  const route = useRoute();

  let districtKeyTitle = breadcumsObject?.district_key;
  let districtTitle = breadcumsObject?.district;
  let cityTitle = breadcumsObject?.city;
  let cityKeyTitle = breadcumsObject?.city_key;
  let countryTitle = breadcumsObject?.country;
  let countryKey = breadcumsObject?.country_key;
  let wardKey = breadcumsObject?.ward_key;

  if (countryKey) {
    if (countryKey.toLowerCase() === "vn") {
      switch (activeIndex) {
        case 0:
          document.title = `${i18n.global.t(
            `Weather_Today_for_{district}_{city}_{country}`,
            {
              district: districtKeyTitle
                ? `${i18n.global.t(
                    `${convertToSlugCity(cityTitle)}.${convertToSlugCity(
                      cityTitle
                    )}_${languageParam}.${convertToLowCase(
                      wardKey ? wardKey : districtKeyTitle
                    )}`
                  )}, `
                : "",
              city: cityKeyTitle
                ? `${i18n.global.t(
                    `city.city_${languageParam}.${convertToLowCase(
                      cityKeyTitle
                    )}`
                  )}, `
                : "",
              country: countryTitle,
            }
          )} | 9Weather`;
          break;

        case 1:
          document.title = `${i18n.global.t(
            `Weather_Hourly_for_{district}_{city}_{country}`,
            {
              district: districtKeyTitle
                ? `${i18n.global.t(
                    `${convertToSlugCity(cityTitle)}.${convertToSlugCity(
                      cityTitle
                    )}_${languageParam}.${convertToLowCase(
                      wardKey ? wardKey : districtKeyTitle
                    )}`
                  )}, `
                : "",
              city: cityKeyTitle
                ? `${i18n.global.t(
                    `city.city_${languageParam}.${convertToLowCase(
                      cityKeyTitle
                    )}`
                  )}, `
                : "",
              country: countryTitle,
            }
          )} | 9Weather`;
          break;
        case 2:
          document.title = `${i18n.global.t(
            `Weather_Month_for_{district}_{city}_{country}`,
            {
              district: districtKeyTitle
                ? `${i18n.global.t(
                    `${convertToSlugCity(cityTitle)}.${convertToSlugCity(
                      cityTitle
                    )}_${languageParam}.${convertToLowCase(
                      wardKey ? wardKey : districtKeyTitle
                    )}`
                  )}, `
                : "",
              city: cityKeyTitle
                ? `${i18n.global.t(
                    `city.city_${languageParam}.${convertToLowCase(
                      cityKeyTitle
                    )}`
                  )}, `
                : "",
              country: countryTitle,
            }
          )} | 9Weather`;
          break;
        case 3:
          document.title = `${i18n.global.t(
            `Weather_Radar_for_{district}_{city}_{country}`,
            {
              district: districtKeyTitle
                ? `${i18n.global.t(
                    `${convertToSlugCity(cityTitle)}.${convertToSlugCity(
                      cityTitle
                    )}_${languageParam}.${convertToLowCase(
                      wardKey ? wardKey : districtKeyTitle
                    )}`
                  )}, `
                : "",
              city: cityKeyTitle
                ? `${i18n.global.t(
                    `city.city_${languageParam}.${convertToLowCase(
                      cityKeyTitle
                    )}`
                  )}, `
                : "",
              country: countryTitle,
            }
          )} | 9Weather`;
          break;
        case 4:
          document.title = `${i18n.global.t(
            `Weather_AQI_for_{district}_{city}_{country}`,
            {
              district: districtKeyTitle
                ? `${i18n.global.t(
                    `${convertToSlugCity(cityTitle)}.${convertToSlugCity(
                      cityTitle
                    )}_${languageParam}.${convertToLowCase(
                      wardKey ? wardKey : districtKeyTitle
                    )}`
                  )}, `
                : "",
              city: cityKeyTitle
                ? `${i18n.global.t(
                    `city.city_${languageParam}.${convertToLowCase(
                      cityKeyTitle
                    )}`
                  )}, `
                : "",
              country: countryTitle,
            }
          )} | 9Weather`;
          break;
        case 5:
          document.title = `${i18n.global.t(
            `Weather_UV_for_{district}_{city}_{country}`,
            {
              district: districtKeyTitle
                ? `${i18n.global.t(
                    `${convertToSlugCity(cityTitle)}.${convertToSlugCity(
                      cityTitle
                    )}_${languageParam}.${convertToLowCase(
                      wardKey ? wardKey : districtKeyTitle
                    )}`
                  )}, `
                : "",
              city: cityKeyTitle
                ? `${i18n.global.t(
                    `city.city_${languageParam}.${convertToLowCase(
                      cityKeyTitle
                    )}`
                  )}, `
                : "",
              country: countryTitle,
            }
          )} | 9Weather`;
          break;
        case 6:
          document.title = `${i18n.global.t(
            `Weather_Moon_for_{district}_{city}_{country}`,
            {
              district: districtKeyTitle
                ? `${i18n.global.t(
                    `${convertToSlugCity(cityTitle)}.${convertToSlugCity(
                      cityTitle
                    )}_${languageParam}.${convertToLowCase(
                      wardKey ? wardKey : districtKeyTitle
                    )}`
                  )}, `
                : "",
              city: cityKeyTitle
                ? `${i18n.global.t(
                    `city.city_${languageParam}.${convertToLowCase(
                      cityKeyTitle
                    )}`
                  )}, `
                : "",
              country: countryTitle,
            }
          )} | 9Weather`;
          break;
        default:
          document.title = `${i18n.global.t(
            "Local_National_Global"
          )} | 9Weather`;
          break;
      }
    } else {
      let stateTitle = breadcumsObject?.state;
      let countyTitle = breadcumsObject?.county;
      let countyCities = breadcumsObject?.cities;

      switch (activeIndex) {
        case 0:
          document.title = `${i18n.global.t(
            `Weather_Today_for_{district}_{city}_{country}`,
            {
              district: countyCities ? `${countyCities}, ` : "",
              city: stateTitle ? `${stateTitle}, ` : "",
              country: countryTitle,
            }
          )} | 9weather`;
          break;

        case 1:
          document.title = `${i18n.global.t(
            `Weather_Hourly_for_{district}_{city}_{country}`,
            {
              district: countyCities ? `${countyCities}, ` : "",
              city: stateTitle ? `${stateTitle}, ` : "",
              country: countryTitle,
            }
          )} | 9weather`;
          break;
        case 2:
          document.title = `${i18n.global.t(
            `Weather_Month_for_{district}_{city}_{country}`,
            {
              district: countyCities ? `${countyCities}, ` : "",
              city: stateTitle ? `${stateTitle}, ` : "",
              country: countryTitle,
            }
          )} | 9weather`;
          break;
        case 3:
          document.title = `${i18n.global.t(
            `Weather_Radar_for_{district}_{city}_{country}`,
            {
              district: countyCities ? `${countyCities}, ` : "",
              city: stateTitle ? `${stateTitle}, ` : "",
              country: countryTitle,
            }
          )} | 9weather`;
          break;
        case 4:
          document.title = `${i18n.global.t(
            `Weather_AQI_for_{district}_{city}_{country}`,
            {
              district: countyCities ? `${countyCities}, ` : "",
              city: stateTitle ? `${stateTitle}, ` : "",
              country: countryTitle,
            }
          )} | 9weather`;
          break;
        case 5:
          document.title = `${i18n.global.t(
            `Weather_UV_for_{district}_{city}_{country}`,
            {
              district: countyCities ? `${countyCities}, ` : "",
              city: stateTitle ? `${stateTitle}, ` : "",
              country: countryTitle,
            }
          )} | 9weather`;
          break;
        case 6:
          document.title = `${i18n.global.t(
            `Weather_Moon_for_{district}_{city}_{country}`,
            {
              district: countyCities ? `${countyCities}, ` : "",
              city: stateTitle ? `${stateTitle}, ` : "",
              country: countryTitle,
            }
          )} | 9weather`;
          break;

        default:
          document.title = `${i18n.global.t(
            "Local_National_Global"
          )} | 9weather`;
          break;
      }
    }
  } else {
    document.title = `${i18n.global.t("Local_National_Global")} | 9weather`;
  }
}
