<template>
  <div class="w-full h-full mt-4">
    <!-- -->
    <BaseComponent :isShowPad="false">
      <template v-slot:header>
        <div class="w-full text-left bor-bottom">
          <div class="w-full">
            <div class="txt_regular text-left">
              <span>{{ $t("Weather_forecast_on_your_website") }}</span>
            </div>
            <div class="txt_light_summer">
              <span>{{ $t("Create_custom_code_for_your_website") }} </span>
            </div>
          </div>
        </div>
      </template>
      <div class="w-full pl-4 pr-4 pb-4">
        <div class="lg:flex block w-full justify-between p-4">
          <!-- Left -->
          <div class="lg:w-[50%] flex flex-col gap-4">
            <div class="label w-full">
              <div class="text-left mb-2 txt_regular">
                <span>{{ $t("Locations") }}</span>
              </div>
              <div class="w-full flex justify-start">
                <el-select
                  size="large"
                  v-model="valueAddress"
                  filterable
                  :placeholder="$t('Search_location')"
                  :filter-method="() => true"
                  no-data-text="No data"
                  @input="handleInput"
                  @update:modelValue="onChangeChoose"
                >
                  <el-option
                    v-for="(item, index) in options"
                    :key="index"
                    :label="item.label"
                    :value="item"
                  />
                </el-select>
              </div>
            </div>
            <div class="label w-full">
              <div class="text-left mb-2 txt_regular">
                <span>{{ $t("Select_template") }}</span>
              </div>
              <div class="w-full flex justify-start">
                <el-select
                  v-model="valueSampling"
                  placeholder="Select"
                  size="large"
                  @change="onChangeSampling"
                >
                  <el-option
                    v-for="item in optionsSampling"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
            </div>
            <div class="label w-full">
              <div class="text-left mb-2 txt_regular">
                <span>{{ $t("Number_of_days") }} </span>
              </div>
              <div class="w-full flex justify-start">
                <el-select
                  v-model="valueNumberDay"
                  placeholder="Select"
                  size="large"
                  @change="onChangeNumberDay"
                >
                  <el-option
                    v-for="(item, index) in optionsNumberDay"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
            </div>

            <div class="label w-full">
              <div class="text-left mb-2 txt_regular">
                <span>{{ $t("Color_change_panel") }}</span>
              </div>
              <div
                class="w-full flex gap-10 items-center h-[140px] txt_light_summer"
              >
                <div
                  class="flex flex-col items-center h-full justify-between gap-1 text-left"
                >
                  <div class="flex flex-col gap-1 w-full">
                    <div>
                      <span>{{ $t("Background_color") }}</span>
                    </div>
                    <div class="p-1.5 w-[40px] h-[35px]">
                      <el-color-picker
                        :show-alpha="false"
                        v-model="titleBackgroundColor"
                        @change="onChangeTitleBackgroundColor"
                      />
                    </div>
                  </div>
                  <div class="flex flex-col gap-1 w-full">
                    <div>
                      <span>{{ $t("Color_description") }}</span>
                    </div>
                    <div class="p-1.5 w-[40px] h-[35px]">
                      <el-color-picker
                        :show-alpha="true"
                        v-model="descriptionColor"
                        @change="onChangeDescriptionColor"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="flex flex-col items-center h-full justify-between gap-1 text-left"
                >
                  <div class="flex flex-col gap-1 w-full">
                    <div>
                      <span>{{ $t("Title_color") }}</span>
                    </div>
                    <div class="p-1.5 w-[40px] h-[35px]">
                      <el-color-picker
                        :show-alpha="true"
                        v-model="titleColor"
                        @change="onChangeTitleColor"
                      />
                    </div>
                  </div>
                  <div class="flex flex-col gap-1 w-full">
                    <div>
                      <span>{{ $t("Text_color") }}</span>
                    </div>
                    <div class="p-1.5 w-[40px] h-[35px]">
                      <el-color-picker
                        :show-alpha="true"
                        v-model="textColor"
                        @change="onChangeTextColor"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="flex flex-col items-center h-full justify-between gap-1 text-left"
                >
                  <div class="flex flex-col gap-1 w-full">
                    <div>
                      <span>{{ $t("Line_color") }}</span>
                    </div>
                    <div class="p-1.5 w-[40px] h-[35px]">
                      <el-color-picker
                        :show-alpha="true"
                        v-model="lineColor"
                        @change="onChangeLineColor"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full mt-4 text-left">
              <button
                @click="onClickCreateWidget(true)"
                type="button"
                class="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none font-medium rounded-xl text-sm px-4 py-2.5 text-center me-2 mb-2"
              >
                <div class="flex items-center justify-center gap-1">
                  <img src="../../assets/images/svg/ic_create.svg" alt="" />
                  <span class="txt_medium">{{ $t("Add_widget") }}</span>
                </div>
              </button>
            </div>
          </div>
          <!-- right -->
          <div class="lg:w-[50%] h-full lg:pl-8 lg:pr-8">
            <div class="title-switch">
              <!--  -->
              <div class="w-full text-left txt_regular">
                <span>Width:</span>
              </div>
              <div class="slider-demo-block">
                <el-slider
                  :max="500"
                  :min="200"
                  v-model="valueSliderWidth"
                  @change="onChangeSliderWidth"
                />
              </div>
            </div>
            <!-- Option 1 -->
            <div
              v-if="valueSampling === 'option_1'"
              class="form-widget w-full p-2"
            >
              <div
                v-if="isVisible && renderObjectWidget"
                :key="reloadKey"
                class="w-full h-full flex justify-center items-center"
              >
                <!--  -->
                <div
                  :style="{
                    width: valueSliderWidth + 'px',
                    background: titleBackgroundColor,
                  }"
                  class="widget-form-new text-black overflow-hidden"
                >
                  <!--  -->
                  <div class="w-full items-center pl-4 pr-4 pt-2 pb-2">
                    <!-- Nhiệt độ -->
                    <div class="flex w-full">
                      <div class="text-left h-full w-auto">
                        <div :style="{ color: titleColor }">
                          <p class="temp-ture">
                            <span class="txt_regular_40">{{
                              convertTemperature(
                                renderObjectWidget?.currently?.temperature
                              )
                            }}</span>
                          </p>
                          <a class="txt_regular_city_40" href="">{{
                            valueAddressLocation
                          }}</a>
                        </div>
                        <div
                          class="txt_regular_des"
                          :style="{ color: descriptionColor }"
                        >
                          <p>
                            <span
                              >{{ $t("Real_feel") }}
                              {{
                                convertTemperature(
                                  renderObjectWidget?.currently
                                    ?.apparentTemperature
                                )
                              }}</span
                            >
                          </p>
                          <p>
                            <span>{{
                              convertCapitalizeWords(
                                $t(
                                  `${renderObjectWidget?.currently?.summary.replace(
                                    /\s+/g,
                                    "_"
                                  )}`
                                )
                              )
                            }}</span>
                          </p>
                        </div>
                      </div>
                      <div class="ml-4 h-full flex items-center pt-4">
                        <component
                          :width="50"
                          :height="50"
                          :is="
                            convertIconCurrently(
                              renderObjectWidget?.currently?.icon
                            )
                          "
                        ></component>
                      </div>
                    </div>
                  </div>
                  <!--  -->
                  <div
                    class="h-[42%] w-full flex items-center justify-center pb-4 pl-4 pr-4 txt_regular_des"
                    :style="{ color: textColor }"
                  >
                    <div class="w-full">
                      <div
                        :style="{
                          'border-bottom':
                            index === renderObjectWidget.listDaily.length - 1
                              ? 'none'
                              : `1px solid ${lineColor}`,
                        }"
                        class="flex justify-between items-center pt-2 pb-2 txt_regular_14"
                        v-for="(item, index) in renderObjectWidget?.listDaily"
                        :key="index"
                      >
                        <div class="w-[80px] text-left">
                          <span>{{ convertDayWeek(item.time) }}</span>
                        </div>
                        <div class="flex text-right">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 22C13.8565 22 15.637 21.2625 16.9497 19.9497C18.2625 18.637 19 16.8565 19 15C19 13 18 11.1 16 9.5C14 7.9 12.5 5.5 12 3C11.5 5.5 10 7.9 8 9.5C6 11.1 5 13 5 15C5 16.8565 5.7375 18.637 7.05025 19.9497C8.36301 21.2625 10.1435 22 12 22Z"
                              stroke="var(--color-chance-of-rain)"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <span>{{ Math.round(item.humidity * 100) }}%</span>
                        </div>
                        <div class="flex items-center gap-2">
                          <component
                            :is="convertIconCurrently(item?.icon)"
                          ></component>

                          <!-- <img :src="convertIconCurrently(item?.icon)" alt="" />
                          <img :src="convertIconCurrently(item?.icon)" alt="" /> -->
                        </div>
                        <div class="flex items-center gap-1">
                          <span>
                            {{ convertTemperatureNot(item.temperatureMin) }}°
                          </span>
                          <span>
                            {{ convertTemperatureNot(item.temperatureMax) }}°
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="h-[calc(100%-80%)] w-full bg-widget pl-4 pr-4 pt-2 pb-2"
                  >
                    <div
                      class="w-full flex justify-end items-center h-full gap-1"
                    >
                      <div class="logoImg"></div>
                    </div>
                  </div>
                </div>
                <!--  -->
              </div>
              <div
                v-if="!isVisible && !renderObjectWidget"
                class="h-[352px] w-full"
              ></div>
            </div>

            <!-- Option 2 -->
            <div
              v-if="valueSampling === 'option_2'"
              class="form-widget w-full p-2"
            >
              <div
                v-if="isVisible && renderObjectWidget"
                :key="reloadKey"
                class="w-full h-full flex justify-center items-center"
              >
                <!--  -->
                <div
                  :style="{
                    width: valueSliderWidth + 'px',
                    background: titleBackgroundColor,
                  }"
                  class="widget-form-new text-black overflow-hidden"
                >
                  <!--  -->
                  <div class="w-full items-center pl-4 pr-4 pt-2 pb-2">
                    <div class="w-full text-center pt-2">
                      <span class="txt_medium_30 text-white" href="">{{
                        valueAddressLocation
                      }}</span>
                    </div>
                    <!-- Nhiệt độ -->
                    <div class="flex w-full">
                      <div class="mr-4 h-full flex items-center pt-4">
                        <component
                          :width="40"
                          :height="40"
                          :is="
                            convertIconCurrently(
                              renderObjectWidget?.currently?.icon
                            )
                          "
                        ></component>
                      </div>
                      <div class="text-left h-full w-auto">
                        <div :style="{ color: titleColor }">
                          <p class="temp-ture">
                            <span class="txt_regular_40">{{
                              convertTemperature(
                                renderObjectWidget?.currently?.temperature
                              )
                            }}</span>
                          </p>
                        </div>
                        <div
                          class="txt_regular_des"
                          :style="{ color: descriptionColor }"
                        >
                          <p>
                            <span
                              >{{ $t("Real_feel") }}
                              {{
                                convertTemperature(
                                  renderObjectWidget?.currently
                                    ?.apparentTemperature
                                )
                              }}</span
                            >
                          </p>
                          <p>
                            <span>{{
                              convertCapitalizeWords(
                                $t(
                                  `${renderObjectWidget?.currently?.summary.replace(
                                    /\s+/g,
                                    "_"
                                  )}`
                                )
                              )
                            }}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--  -->
                  <div
                    class="h-[42%] w-full flex items-center justify-center pb-4 pl-4 pr-4 txt_regular_des"
                    :style="{ color: textColor }"
                  >
                    <div class="w-full">
                      <div
                        :style="{
                          'border-bottom':
                            index === renderObjectWidget.listDaily.length - 1
                              ? 'none'
                              : `1px solid ${lineColor}`,
                        }"
                        class="flex justify-between items-center pt-2 pb-2 txt_regular_14"
                        v-for="(item, index) in renderObjectWidget?.listDaily"
                        :key="index"
                      >
                        <div class="w-[60px]">
                          <span>{{ convertDayWeek(item.time) }}</span>
                        </div>
                        <div class="flex text-right">
                          <img
                            src="../../assets/images/svg_v2/ic_droplet_blue.svg"
                            alt=""
                            width="16"
                          />
                          <span>{{ Math.round(item.humidity * 100) }}%</span>
                        </div>
                        <div class="flex items-center gap-2">
                          <component
                            :is="convertIconCurrently(item?.icon)"
                          ></component>
                          <component
                            :is="convertIconCurrently(item?.icon)"
                          ></component>

                          <!-- <img :src="convertIconCurrently(item?.icon)" alt="" />
                          <img :src="convertIconCurrently(item?.icon)" alt="" /> -->
                        </div>
                        <div class="flex items-center gap-1">
                          <span>
                            {{ convertTemperatureNot(item.temperatureMin) }}°
                          </span>
                          <span>
                            {{ convertTemperatureNot(item.temperatureMax) }}°
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="h-[calc(100%-80%)] w-full bg-widget pl-4 pr-4 pt-2 pb-2"
                  >
                    <div
                      class="w-full flex justify-end items-center h-full gap-1"
                    >
                      <div class="logoImg"></div>
                    </div>
                  </div>
                </div>
                <!--  -->
              </div>
              <div
                v-if="!isVisible && !renderObjectWidget"
                class="h-[352px] w-full"
              ></div>
            </div>

            <!-- Option 3 -->
            <div
              v-if="valueSampling === 'option_3'"
              class="form-widget w-full p-2"
            >
              <div
                v-if="isVisible && renderObjectWidget"
                :key="reloadKey"
                class="w-full h-full flex justify-center items-center"
              >
                <!--  -->
                <div
                  :style="{
                    width: valueSliderWidth + 'px',
                    background: titleBackgroundColor,
                  }"
                  class="widget-form-new text-black overflow-hidden"
                >
                  <!--  -->
                  <div class="w-full items-center pl-4 pr-4 pt-2 pb-2">
                    <div class="w-full text-left pt-2">
                      <span class="txt_medium_30 text-white" href="">{{
                        valueAddressLocation
                      }}</span>
                    </div>
                    <!-- Nhiệt độ -->
                    <div class="flex w-full">
                      <div class="mr-4 h-full flex items-center pt-4">
                        <component
                          :width="40"
                          :height="40"
                          :is="
                            convertIconCurrently(
                              renderObjectWidget?.currently?.icon
                            )
                          "
                        ></component>
                      </div>
                      <div class="text-left h-full w-auto">
                        <div :style="{ color: titleColor }">
                          <p class="temp-ture">
                            <span class="txt_regular_40">{{
                              convertTemperature(
                                renderObjectWidget?.currently?.temperature
                              )
                            }}</span>
                          </p>
                        </div>
                        <div
                          class="txt_regular_des"
                          :style="{ color: descriptionColor }"
                        >
                          <p>
                            <span
                              >{{ $t("Real_feel") }}
                              {{
                                convertTemperature(
                                  renderObjectWidget?.currently
                                    ?.apparentTemperature
                                )
                              }}</span
                            >
                          </p>
                          <p>
                            <span>{{
                              convertCapitalizeWords(
                                $t(
                                  `${renderObjectWidget?.currently?.summary.replace(
                                    /\s+/g,
                                    "_"
                                  )}`
                                )
                              )
                            }}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--  -->

                  <div
                    class="h-[calc(100%-80%)] w-full bg-widget pl-4 pr-4 pt-2 pb-2"
                  >
                    <div
                      class="w-full flex justify-end items-center h-full gap-1"
                    >
                      <div class="logoImg"></div>
                    </div>
                  </div>
                </div>
                <!--  -->
              </div>
              <div
                v-if="!isVisible && !renderObjectWidget"
                class="h-[352px] w-full"
              ></div>
            </div>

            <!-- Option 4 -->

            <div
              v-if="valueSampling === 'option_4'"
              class="form-widget w-full p-2"
            >
              <div
                v-if="isVisible && renderObjectWidget"
                :key="reloadKey"
                class="w-full h-full flex justify-center items-center"
              >
                <!--  -->
                <div
                  :style="{
                    width: valueSliderWidth + 'px',
                    background: titleBackgroundColor,
                  }"
                  class="widget-form-new text-black overflow-hidden"
                >
                  <!--  -->
                  <div class="w-full items-center pl-4 pr-4 pt-2 pb-2">
                    <div class="w-full text-left pt-2">
                      <span class="txt_medium_30 text-white" href="">{{
                        valueAddressLocation
                      }}</span>
                    </div>
                    <!-- Nhiệt độ -->
                    <div class="flex w-full">
                      <div class="mr-4 h-full flex items-center pt-4">
                        <component
                          :width="40"
                          :height="40"
                          :is="
                            convertIconCurrently(
                              renderObjectWidget?.currently?.icon
                            )
                          "
                        ></component>
                      </div>
                      <div class="text-left h-full w-auto">
                        <div :style="{ color: titleColor }">
                          <p class="temp-ture">
                            <span class="txt_regular_40">{{
                              convertTemperature(
                                renderObjectWidget?.currently?.temperature
                              )
                            }}</span>
                          </p>
                        </div>
                        <div
                          class="txt_regular_des"
                          :style="{ color: descriptionColor }"
                        >
                          <p>
                            <span
                              >{{ $t("Real_feel") }}
                              {{
                                convertTemperature(
                                  renderObjectWidget?.currently
                                    ?.apparentTemperature
                                )
                              }}</span
                            >
                          </p>
                          <p>
                            <span>{{
                              convertCapitalizeWords(
                                $t(
                                  `${renderObjectWidget?.currently?.summary.replace(
                                    /\s+/g,
                                    "_"
                                  )}`
                                )
                              )
                            }}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--  -->

                  <div
                    class="h-[calc(100%-80%)] w-full bg-widget pl-4 pr-4 pt-2 pb-2"
                  >
                    <div
                      class="w-full flex justify-end items-center h-full gap-1"
                    >
                      <div class="logoImg"></div>
                    </div>
                  </div>
                </div>
                <!--  -->
              </div>
              <div
                v-if="!isVisible && !renderObjectWidget"
                class="h-[352px] w-full"
              ></div>
            </div>

            <!--  -->
            <div class="w-full h-[100px] mt-4 bor-form-10">
              <textarea
                type="textarea"
                ref="iframeCode"
                class="textarea-type hide-scroll"
                :placeholder="Copy_code_iframe_in_website"
                v-model="valueCodeWidget"
                maxlength="500"
              />
            </div>

            <div class="w-full mt-4 text-left">
              <button
                @click="onClickCopyWidget"
                type="button"
                class="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none font-medium rounded-xl text-sm px-4 py-2.5 text-center me-2 mb-2"
              >
                <div class="flex items-center justify-center gap-1">
                  <img src="../../assets/images/svg/ic_copy.svg" alt="" />
                  <span class="txt_medium">{{ $t("Copy_code") }}</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </BaseComponent>

    <!-- <div v-html="valueCodeWidget"></div> -->
    <div class="w-full items-center mt-4">
      <BaseComponent :isShowPad="true">
        <template v-slot:header>
          <div class="flex items-center text-left gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.25 12.75V11.25H15.675C15.6 10.8 15.375 10.35 15.15 9.9L16.275 8.775L15.225 7.725L14.1 8.85C13.725 8.625 13.275 8.4 12.75 8.325V6.75H11.25V8.325C10.8 8.4 10.35 8.625 9.9 8.85L8.775 7.725L7.725 8.775L8.85 9.9C8.625 10.275 8.4 10.725 8.325 11.25H6.75V12.75H8.325C8.4 13.2 8.625 13.65 8.85 14.1L7.725 15.225L8.775 16.275L9.9 15.15C10.275 15.375 10.725 15.6 11.25 15.675V17.25H12.75V15.675C13.2 15.6 13.65 15.375 14.1 15.15L15.225 16.275L16.275 15.225L15.15 14.1C15.375 13.725 15.6 13.275 15.675 12.75H17.25ZM12 14.25C10.725 14.25 9.75 13.275 9.75 12C9.75 10.725 10.725 9.75 12 9.75C13.275 9.75 14.25 10.725 14.25 12C14.25 13.275 13.275 14.25 12 14.25Z"
                fill="var(--color-icon-df)"
              />
              <path
                d="M12.0004 1.5V3C16.9504 3 21.0004 7.05 21.0004 12C21.0004 16.95 16.9504 21 12.0004 21V22.5C17.7754 22.5 22.5004 17.775 22.5004 12C22.5004 6.225 17.7754 1.5 12.0004 1.5ZM6.15039 18.825L5.25039 20.025C6.15039 20.775 7.20039 21.45 8.40039 21.825L8.92539 20.4C7.87539 20.025 6.97539 19.5 6.15039 18.825ZM3.15039 13.5L1.65039 13.8C1.87539 15 2.32539 16.2 2.92539 17.25L4.20039 16.5C3.67539 15.6 3.30039 14.55 3.15039 13.5ZM4.20039 7.5L2.92539 6.75C2.32539 7.8 1.87539 9 1.72539 10.2L3.22539 10.425C3.30039 9.375 3.67539 8.4 4.20039 7.5ZM8.85039 3.6L8.32539 2.175C7.20039 2.625 6.15039 3.225 5.25039 3.975L6.22539 5.1C6.97539 4.5 7.87539 3.975 8.85039 3.6Z"
                fill="var(--color-icon-df)"
              />
            </svg>

            <p>
              {{ $t("INSTRUCTIONS_ON_WEBSITE") }}
            </p>
          </div>
        </template>
        <div class="text-left flex flex-col gap-2">
          <div>
            <p>
              {{ $t("Creating_and_installing") }}
            </p>
          </div>
          <div>
            <p>
              {{ $t("Next_is_a_custom") }}
            </p>
          </div>
          <div>
            <p>
              {{ $t("Then_you_copy") }}
            </p>
          </div>
          <div>
            <p>
              {{ $t("The_above_code") }}
            </p>
          </div>
        </div>
      </BaseComponent>
    </div>

    <div class="w-full h-[100px] items-center mt-4"></div>
    <!-- <div v-html="valueCodeWidget"></div> -->
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import { ElNotification } from "element-plus";
import { encodeBase64, urlEncodeString } from "../../utils/EncoderDecoderUtils";

import {
  getIconHourlyForecastTheme,
  convertDayOfWeek,
  convertFtoC,
  convertCtoF,
  codeToFind,
  capitalizeWords,
  convertDayOfWeekMonth,
} from "../../utils/converValue.js";
import BaseComponent from "../common/baseComponent.vue";
export default {
  name: "widget-page",
  components: { BaseComponent },

  setup() {
    const successCopy = () => {
      ElNotification({
        title: "Success",
        message: "Copy URL Iframe Widget Success",
        type: "success",
        duration: 3000,
        position: "top-right",
        dangerouslyUseHTMLString: true,
        showClose: true, // Show the close button
        iconClass: "el-icon-check", // Custom icon class
        customClass: "custom-notification", // Custom CSS class
        offset: 50, // Offset from the top
      });
    };
    const successCreate = () => {
      ElNotification({
        title: "Success",
        message: "Create Iframe Widget Success",
        type: "success",
        duration: 3000,
        position: "top-right",
        dangerouslyUseHTMLString: true,
        showClose: true, // Show the close button
        iconClass: "el-icon-check", // Custom icon class
        customClass: "custom-notification", // Custom CSS class
        offset: 50, // Offset from the top
      });
    };
    return {
      successCopy,
      successCreate,
    };
  },

  data() {
    return {
      valueAddress: "",
      valueSampling: "option_1",
      valueNumberDay: "number_3",
      valueCodeWidget: "",
      options: [],
      valueSliderWidth: 300,
      color: "#ff0000",
      listAddressVietName: [],

      reloadKey: 0,
      isVisible: true,
      valueAddressLocation: "",
    };
  },

  computed: {
    ...mapGetters("commonModule", ["weatherWidgetOptionGetters"]),

    classThemeBg() {
      const themeValue = this.$store.state.commonModule.themeValue;
      const savedTheme = themeValue
        ? themeValue
        : localStorage.getItem("theme");
      if (savedTheme === "light") {
        return "bg-color-light";
      }
      return "bg-color-dark";
    },
    optionsSampling() {
      return [
        {
          value: "option_1",
          label: this.$t(`Sample_{number}`, { number: 1 }),
        },
        {
          value: "option_2",
          label: this.$t(`Sample_{number}`, { number: 2 }),
        },
        {
          value: "option_3",
          label: this.$t(`Sample_{number}`, { number: 3 }),
        },
        {
          value: "option_4",
          label: this.$t(`Sample_{number}`, { number: 4 }),
        },
      ];
    },

    optionsNumberDay() {
      return [
        {
          value: "number_3",
          label: this.$t(`{number}_days`, { number: 3 }),
        },
        {
          value: "number_5",
          label: this.$t(`{number}_days`, { number: 5 }),
        },
        {
          value: "number_7",
          label: this.$t(`{number}_days`, { number: 7 }),
        },
      ];
    },

    titleBackgroundColor: {
      get() {
        const valueTheme = this.$store.state.commonModule.themeValue;
        if (valueTheme === "light") {
          return this.$store.state.commonModule.titleBackgroundColorLight;
        } else {
          return this.$store.state.commonModule.titleBackgroundColorDark;
        }
      },
      set(value) {
        this.SET_TITLE_BACKGROUND_COLOR(value);
      },
    },

    descriptionColor: {
      get() {
        const valueTheme = this.$store.state.commonModule.themeValue;
        if (valueTheme === "light") {
          return this.$store.state.commonModule.descriptionColorLight;
        } else {
          return this.$store.state.commonModule.descriptionColorDark;
        }
      },
      set(value) {
        this.setDescriptionColor(value);
      },
    },
    titleColor: {
      get() {
        const valueTheme = this.$store.state.commonModule.themeValue;
        if (valueTheme === "light") {
          return this.$store.state.commonModule.titleColorLight;
        } else {
          return this.$store.state.commonModule.titleColorDark;
        }
      },
      set(value) {
        this.setTitleColor(value);
      },
    },
    textColor: {
      get() {
        const valueTheme = this.$store.state.commonModule.themeValue;
        if (valueTheme === "light") {
          return this.$store.state.commonModule.textColorLight;
        } else {
          return this.$store.state.commonModule.textColorDark;
        }
      },
      set(value) {
        this.setTextColor(value);
      },
    },
    lineColor: {
      get() {
        const valueTheme = this.$store.state.commonModule.themeValue;
        if (valueTheme === "light") {
          return this.$store.state.commonModule.lineColorLight;
        } else {
          return this.$store.state.commonModule.lineColorDark;
        }
      },
      set(value) {
        this.setLineColor(value);
      },
    },

    renderObjectWidget() {
      return this.$store.state.weatherModule.objectWidget;
    },

    renderCountry() {
      return this.$store.state.weatherModule.cityCountry;
    },

    languageParam() {
      const languageRouter = this.$route.params;
      return Object.keys(languageRouter).length !== 0
        ? languageRouter.language !== "en" && languageRouter.language !== "vi"
          ? "en"
          : languageRouter.language
        : this.$i18n.locale !== "en" && this.$i18n.locale !== "vi"
        ? "en"
        : this.$i18n.locale;
    },
  },

  mounted() {
    const retrievedArray = JSON.parse(
      localStorage.getItem("currentLocationChome")
    );

    this.valueAddressLocation =
      this.$t(`city.city_${this.languageParam}.${retrievedArray?.city_key}`) +
      ", " +
      retrievedArray.country;

    localStorage.setItem(
      "titleWidget",
      JSON.stringify(this.valueAddressLocation)
    );
    const objectOptionWidgetNew = {
      valueSample: this.valueSampling,
      valueNumber: this.valueNumberDay,
      valueSliderWidth: this.valueSliderWidth,
    };
    this.setOptionWidget(objectOptionWidgetNew);
    if (this.renderObjectWidget) {
      this.onClickCreateWidget(false);
    }
  },

  methods: {
    ...mapMutations("commonModule", [
      "setTitleBackgroundColor",
      "setDescriptionColor",
      "setTitleColor",
      "setTextColor",
      "setLineColor",
      "setNumberDataDaily",
      "SET_TITLE_BACKGROUND_COLOR",
    ]),
    ...mapMutations("weatherModule", [
      "setNumberDailyWeather",
      "setTitleWidget",
      "setOptionWidget",
    ]),

    ...mapActions("commonModule", ["getFormattedAddress", "getWeatherWidget"]),
    ...mapActions("weatherModule", ["getWeatherByWidget"]),

    onChangeSampling(value) {
      this.valueSampling = value;

      if (value === "option_1") {
        this.setTitleBackgroundColor("#0D274C");
      }
      if (value === "option_2") {
        this.setTitleBackgroundColor(
          "linear-gradient(102deg, #0b8429 17.75%, #085502 84.8%)"
        );
      }
      if (value === "option_3") {
        this.setTitleBackgroundColor(
          "linear-gradient(102deg, #0b8429 17.75%, #085502 84.8%)"
        );
      }

      if (value === "option_4") {
        this.setTitleBackgroundColor(
          "linear-gradient(102deg, #4f7ffa 17.75%, #335fd1 84.8%)"
        );
      }
    },
    onChangeSliderWidth(value) {
      this.valueSliderWidth = value;
    },

    convertCapitalizeWords(value) {
      return capitalizeWords(value);
    },

    async onChangeChoose(value) {
      this.valueAddress = null; // Reset giá trị trước khi cập nhật
      this.$nextTick(() => {});
      this.valueAddress = value;

      this.valueAddressLocation = value.label;
      const latitudeValue = value.lat;
      const longitudeValue = value.lng;

      const keyLanguageStorage = this.$route.params.language
        ? this.$route.params.language
        : this.$i18n.locale;
      const param = `version=1&type=8&app_id=amobi.weather.forecast.radar.rain&request=https://api.forecast.io/forecast/TOH_KEY/${latitudeValue},${longitudeValue}?lang=${keyLanguageStorage}`;

      const encodeDataWeather = encodeBase64(param);

      await this.getWeatherByWidget(encodeDataWeather);

      localStorage.setItem(
        "titleWidget",
        JSON.stringify(this.valueAddressLocation)
      );
      this.setTitleWidget(this.valueAddressLocation);
    },

    async handleInput(event) {
      const valueSearch = event.target.value;
      if (valueSearch.length === 0) {
        this.options = [];
        return;
      }
      const urlParam = `version=1&type=4&app_id=amobi.weather.forecast.radar.rain&request=https://maps.googleapis.com/maps/api/geocode/json?address=${urlEncodeString(
        valueSearch
      )}&key=TOH_KEY`;

      const value = encodeBase64(urlParam);

      await this.getWeatherWidget(value);

      const newData = this.weatherWidgetOptionGetters;

      if (!newData || !newData.label) {
        console.error("Dữ liệu không hợp lệ:", newData);
        return;
      }

      if (!this.options.some((option) => option.label === newData.label)) {
        // Tạo một mảng mới để kích hoạt Vue reactivity
        this.options = [...this.options, newData];
      }

      // Kiểm tra DOM sau khi render
    },

    // Khi giá trị thay đổi (chọn từ danh sách hoặc gõ xong)
    // handleChange(event) {
    //

    //   const value = event.target.value;

    //   // Tìm data-value tương ứng trong datalist
    //   const selectedOption = [...event.target.list.options].find(
    //     (option) => option.value === value
    //   );

    //   if (selectedOption) {
    //   }
    // },

    // Khi nhấn phím (ví dụ: để kiểm tra từng phím bấm)
    // handleKeyup(event) {
    //

    // },

    onChangeDescriptionColor(color) {
      this.setDescriptionColor(color);
    },

    onChangeTitleColor(color) {
      this.setTitleColor(color);
    },

    onChangeTextColor(color) {
      this.setTextColor(color);
    },

    onChangeLineColor(color) {
      this.setLineColor(color);
    },

    onChangeTitleBackgroundColor(color) {
      this.SET_TITLE_BACKGROUND_COLOR(color);
    },

    changeColor(color) {
      this.color = color.hex;
      //const { r, g, b, a } = color.rgba;
      //this.color = `rgba(${r}, ${g}, ${b}, ${a})`;
    },
    openSucker(isOpen) {
      if (isOpen) {
        // ... canvas be created
        // this.suckerCanvas = canvas
        // this.suckerArea = [x1, y1, x2, y2]
      } else {
        // this.suckerCanvas && this.suckerCanvas.remove
      }
    },

    convertIconCurrently(value) {
      if (value) {
        const url = getIconHourlyForecastTheme(value);
        return url;
      }
    },

    convertDayWeek(value) {
      const offsetValue = this.$store.state.weatherModule.locationOffset.offset;
      const timeZoneValue =
        this.$store.state.weatherModule.locationOffset.timeZone;

      return convertDayOfWeekMonth(value, offsetValue, timeZoneValue);
    },

    convertTemperature(value) {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activeTemperature_save === "f") {
        return (
          convertCtoF(value) + codeToFind(unitSetting.activeTemperature_save)
        );
      } else {
        return (
          convertFtoC(value) + codeToFind(unitSetting.activeTemperature_save)
        );
      }
    },

    convertTemperatureNot(value) {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activeTemperature_save === "f") {
        return convertCtoF(value);
      } else {
        return convertFtoC(value);
      }
    },

    convertUnitTemperature() {
      const unitSetting = this.$store.state.commonModule.objectSettingSave;
      if (unitSetting.activeTemperature_save === "f") {
        return "F";
      } else {
        return "C";
      }
    },

    onClickCreateWidget(value) {
      this.isVisible = false;
      const objectOptionWidgetNew = {
        valueSample: this.valueSampling,
        valueNumber: this.valueNumberDay,
        valueSliderWidth: this.valueSliderWidth,
      };
      const optionWidgetObject = JSON.stringify(objectOptionWidgetNew);
      this.setOptionWidget(objectOptionWidgetNew);
      localStorage.setItem("optionWidgetObject", optionWidgetObject);

      // Tăng key và hiển thị lại component sau 100ms

      setTimeout(() => {
        this.reloadKey += 1; // Tăng key để Vue render lại component
        this.isVisible = true; // Hiển thị lại component
      }, 100); // Độ trễ 100ms để tạo hiệu ứng "nháy"
      const objectWidget = this.$store.state.weatherModule.objectWidget;
      const objectWidgetString = JSON.stringify(objectWidget);

      console.log("objectWidgetString", objectWidgetString);

      // localStorage.setItem("objectWidget", objectWidgetString);

      const titleColor = this.$store.state.commonModule.titleColor;
      const textColor = this.$store.state.commonModule.textColor;
      const titleBackgroundColor =
        this.$store.state.commonModule.titleBackgroundColor;
      const descriptionColor = this.$store.state.commonModule.descriptionColor;
      const lineColor = this.$store.state.commonModule.lineColor;
      const srcUrl = `http://localhost:8080/widget-view?titleColor=${encodeURIComponent(
        titleColor
      )}&textColor=${encodeURIComponent(
        textColor
      )}&titleBackgroundColor=${encodeURIComponent(
        titleBackgroundColor
      )}&descriptionColor=${encodeURIComponent(
        descriptionColor
      )}&lineColor=${encodeURIComponent(
        lineColor
      )}&objectWidget=${encodeURIComponent(objectWidgetString)}`;

      this.valueCodeWidget = `<iframe
        src="${srcUrl}"
        width="${this.valueSliderWidth}px"
        height="360px"
        id="widget-view"
        scrolling="no"
        frameborder="0"
        allowtransparency="true"
        style="border: none; overflow: hidden"
      ></iframe>`;
      if (value === true) {
        this.successCreate();
      }
    },

    onClickCopyWidget() {
      const textarea = this.$refs.iframeCode;
      textarea.select();
      document.execCommand("copy");

      this.successCopy();
    },

    loadDataVietName() {
      fetch("file-txt/Vietnam.txt")
        .then((response) => response.text())
        .then((text) => {
          this.processFileVietName(text);
        })
        .catch((error) => {
          console.error("Error loading file:", error);
        });
    },

    processFileVietName(data) {
      const lines = data.split("\n");
      this.listAddressVietName = lines.map((line, index) => {
        const values = line
          .split(";")
          .map((value) => value.replace(/"/g, "").trim());
        return {
          id: index + 1,
          country: values[1],
          value: values[2],
          lat: values[3],
          lng: values[4],
        };
      });
    },

    onChangeNumberDay(value) {
      this.valueNumberDay = value;
      switch (value) {
        case "number_5":
          this.setNumberDailyWeather(6);
          break;
        case "number_7":
          this.setNumberDailyWeather(8);
          break;
        default:
          this.setNumberDailyWeather(4);
          break;
      }
    },
  },
};
</script>

<style lang="scss">
.bg-title-widget {
  background-color: rgb(149 139 208 / 25%);
}
.change-color-widget {
  border: 1px solid #000000;
  border-radius: 5px;
}

.slider-demo-block {
  max-width: 600px;
  display: flex;
  align-items: center;
}
.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 12px;
}

.widget-form-new {
  box-shadow: 0 14px 28px rgb(0 0 0 / 0%), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.textarea-type {
  width: 100%;
  height: 100%;
  outline: none; /* Loại bỏ viền xung quanh khi được focus */
  resize: none; /* Ngăn chặn khả năng thay đổi kích thước */
  border-radius: 14px;
  color: #000000;
  border: 1px solid #ced4da;
  overflow: scroll;
  padding: 0.47rem 0.75rem;
  font-size: 0.8125rem;
}

.bg-widget {
  background-color: #dfecff;
}
.logoImg {
  background-image: url(../../assets/images/svg/logo_new.svg);
  width: 125px;
  height: 25px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: width 0.3s ease, height 0.3s ease; /* Thêm hiệu ứng chuyển đổi */
}

.temp-ture {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: start;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.custom-notification {
  text-align: left;
}

.form-control {
  display: block;
  width: 100%;
  padding: 9px 17px;
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1.5px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #b9bfc4;
  outline: 0;
  box-shadow: none;
}

.form-control:hover {
  border: 1.5px solid #6d99c9;
}
</style>
