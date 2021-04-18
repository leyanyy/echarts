<template>
  <div class="total">
    <div class="el-container">
      <div class="el-header">
        <div class="head1">销售数据页面可视化</div>
        <div class="head2">
          <div class="item">
            <div class="none"></div>
            <div class="left">
              <div class="circle1">
                <div class="circle2">
                  <div class="circle3">
                    <div class="iconfont icon-jinebaozhang"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="right">
              <div class="righttop">2100000</div>
              <div class="rightbottom">销售总金额(万元)</div>
            </div>
            <div class="none"></div>
          </div>
          <div class="item">
            <div class="none"></div>

            <div class="left">
              <div class="circle1">
                <div class="circle2">
                  <div class="circle3">
                    <div class="iconfont icon-zhangdan_xiangqing"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="right">
              <div class="righttop">4500000</div>
              <div class="rightbottom">销售总订单数</div>
            </div>
            <div class="none"></div>
          </div>
          <div class="item">
            <div class="none"></div>

            <div class="left">
              <div class="circle1">
                <div class="circle2">
                  <div class="circle3">
                    <div class="iconfont icon-user1"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="right">
              <div class="righttop">350</div>
              <div class="rightbottom">平均客单价(元)</div>
            </div>
            <div class="none"></div>
          </div>
          <div class="item">
            <div class="none"></div>

            <div class="left">
              <div class="circle1">
                <div class="circle2">
                  <div class="circle3">
                    <div class="iconfont icon-user"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="right">
              <div class="righttop">57899</div>
              <div class="rightbottom">购买人数(人)</div>
            </div>
            <div class="none"></div>
          </div>
          <div class="item">
            <div class="none"></div>
            <div class="left">
              <div class="circle1">
                <div class="circle2">
                  <div class="circle3">
                    <div class="iconfont icon-yeji"></div>
                  </div>
                </div>
              </div>
              <div class="none"></div>
            </div>
            <div class="right">
              <div class="righttop">28888</div>
              <div class="rightbottom">销售增长总额(万元)</div>
            </div>
            <div class="none"></div>
          </div>
        </div>
      </div>

      <!-- 主体区域 -->
      <div class="el-main">
        <!-- 左边盒子 -->
        <div class="left">
          <div class="top"></div>
          <div class="left"></div>
          <div class="bottom"></div>
          <div class="right"></div>
          <div class="left1">
            <!-- 左边盒子上部 -->
            <div class="leftTop">
              <!-- 盒子左部分的上部分的文字效果 -->
              <div class="text">
                <div class="text1">
                  <div class="text11">消费群体地域分布</div>
                  <div class="linear1"></div>
                  <div class="linear2"></div>
                </div>
              </div>
              <div class="echarts"><div id="map"></div></div>
            </div>
            <!-- 左边盒子下部 -->
            <div class="leftBottom">
              <div class="text">
                <div class="text1">
                  <div class="text11">平台注册人数</div>
                  <div class="linear1"></div>
                  <div class="linear2"></div>
                </div>
              </div>
              <div class="echarts"><div id="line"></div></div>
            </div>
          </div>
        </div>

        <!-- 中间盒子 -->
        <div class="center">
          <div class="center1">
            <div class="img">
              <img src="../assets/earth.png" alt="" />
            </div>
          </div>
          <div class="bg1">
            <img src="../assets/liubianxing.png" alt="" />
            <div class="text1">36%</div>
            <div class="text2">播货率</div>
          </div>
          <div class="bg2">
            <img src="../assets/liubianxing.png" alt="" />
            <div class="text1">79%</div>
            <div class="text2">复购率</div>
          </div>
          <div class="bg3">
            <img src="../assets/liubianxing.png" alt="" />
            <div class="text1">56%</div>
            <div class="text2">增长率</div>
          </div>
          <div class="bg4">
            <img src="../assets/liubianxing.png" alt="" />
            <div class="text1">20%</div>
            <div class="text2">毛利率</div>
          </div>
          <div class="bg5">
            <img src="../assets/liubianxing.png" alt="" />
            <div class="text1">10%</div>
            <div class="text2">净利率</div>
          </div>
        </div>
        <!-- 右边盒子 -->
        <div class="right">
          <div class="top"></div>
          <div class="left"></div>
          <div class="bottom"></div>
          <div class="right"></div>
          <div class="right1">
            <div class="rightTop">
              <div class="text">
                <div class="text1">
                  <div class="text11">品牌销售总额TOP10</div>
                  <div class="linear1"></div>
                  <div class="linear2"></div>
                </div>
              </div>
            </div>
            <!-- 右边中间盒子 -->
            <div class="rightCenter">
              <div class="none1"></div>

              <!-- 右边中间的左边 -->
              <div class="imgleft">
                <img src="../assets/bg2.png" alt="" />
              </div>
              <!-- 右边中间的右边 -->
              <div class="imgright">
                <div class="num">3000</div>
                <div class="text">入驻商品总数</div>
                <div class="topbox">
                  <div class="topbox1"></div>
                </div>
                <div class="bottombox"></div>
              </div>
              <!-- 占位盒子 -->
              <div class="none1"></div>
            </div>
            <div class="rightBottom">
              <div id="bar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//引入世界地图
var echarts = require("echarts");
import world from "../utils/world";

export default {
  mounted() {
    this.bar();
    this.line();
    this.map();
  },
  methods: {
    bar() {
      var echarts = require("echarts");
      var myChart = echarts.init(document.getElementById("bar"));
      var color = [
        "red",
        "blue",
        "red",
        "blue",
        "red",
        "blue",
        "red",
        "blue",
        "red",
        "blue",
      ];
      //2.指定配置项和数据
      var option = {
        // color: ["#009dff"],

        //文本相关
        textStyle: {
          // width: 100,
          // color: "red",
          fontSize: 18,
        },
        //yyyyyyyyyyyyyyyyyyy

        yAxis: [
          //y1y1y1y1y1y1y
          {
            position: "left",
            offset: 30,
            type: "category",
            data: [
              "XXX品牌",
              "XXX品牌",
              "XXX品牌",
              "XXX品牌",
              "XXX品牌",
              "XXX品牌",
              "XXX品牌",
              "XXX品牌",
              "XXX品牌",
              "XXX品牌",
            ],
            axisLabel: {
              color: "#fff",
              lineStyle: {
                // color: "#000547",
              },
              // height: "40px",
              fontSize: 17,
            },
            //不显示刻度
            axisTick: {
              show: false,
            },
          },

          //y2y2y2y2y2y2
          {
            position: "right",
            offset: 30,
            data: [
              15000,
              16000,
              17000,
              18000,
              19000,
              24000,
              25000,
              27000,
              28000,
              29000,
            ],
            //不显示刻度
            axisTick: {
              show: false,
            },
            //不显示坐标轴线
            axisLine: {
              show: false,
            },
            axisLabel: {
              color: "#fff",
              lineStyle: {
                // color: "#000547",
              },
              fontSize: 15,
            },
          },

          //y3y3y3y3y3
          {
            //第三个y轴也在右侧，距第二个70个像素

            //!!!!这两个连起来才生效
            data: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
            type: "category",

            // nameTextStyle: {
            //   fontSize: 35,
            // },
            position: "left",
            offset: 130,

            // name: "平均工资",
            axisLine: {
              lineStyle: {},
            },

            label: {
              // 在文本中，可以对部分文本采用 rich 中定义样式。
              // 这里需要在文本中使用标记符号：
              // `{styleName|text content text content}` 标记样式名。
              // 注意，换行仍是使用 '\n'。

              //富文本的使用
              data: ["{a|1}"].join("\n"),

              rich: {
                a: {
                  borderWidth: "3",
                  borderColor: "red",
                  color: "red",
                },
              },
            },
            axisLine: {
              show: false,
            },
            //控制坐标轴字体颜色 大小
            axisLabel: {
              color: "#2385aa",
              lineStyle: {
                // color: "#000547",
              },
              fontSize: 15,

              //坐标轴的边框
              borderWidth: "2",
              borderColor: "#2385aa",
              shadowColor: "#2385aa",
              shadowBlur: 5,
              borderRadius: 17,
              padding: 8,
              width: 17,
              // backgroundColor: color,
              //文字居中
              align: "center",
            },

            //不显示刻度
            axisTick: {
              show: false,
            },
          },
        ],

        xAxis: {
          type: "value",
          show: false,
          //坐标刻度的最大值
          max: 33000,
        },
        series: [
          {
            //这里面的data是显示在柱子里面的
            data: [
              15000,
              16000,
              17000,
              18000,
              19000,
              24000,
              25000,
              27000,
              28000,
              29000,
            ],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 5, [
                  { offset: 0, color: "#0279fe" }, //柱图渐变色
                  { offset: 0.5, color: "#0099fe" }, //柱图渐变色
                  { offset: 1, color: "#0eb2f5" }, //柱图渐变色
                ]),
              },
              // emphasis: {
              //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              //     { offset: 0, color: "#71C8B1" }, //柱图高亮渐变色
              //     { offset: 0.7, color: "#44C0C1" }, //柱图高亮渐变色
              //     { offset: 1, color: "#06B5D7" }, //柱图高亮渐变色
              //   ]),
              // },
            },
            label: {
              // show: true,
              // position: "right",
              //拿的是series里面的data数据
              //注意空格
              // formatter: "{c}",
            },
            // 柱子之间的距离
            // barCategoryGap: 25,
            // 柱子的宽度
            barWidth: 17,
            // barHeight: 50,
          },
        ],
        grid: {
          left: "18%",
          right: "20%",
          bottom: "18%",
          containLabel: true,
        },
      };
      //3.把配置项给实例对象
      myChart.setOption(option);
      //让图表自适应屏幕
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },

    //折线图
    line() {
      var echarts = require("echarts");
      var myChart = echarts.init(document.getElementById("line"));

      var option1 = {
        grid: {
          show: false,
          // borderColor: "red",
        },

        tooltip: {
          trigger: "axis",

          formatter: `2020年{b}月</br>
                      注册人数{c}万人`,

          backgroundColor: "#226fd3",
          textStyle: {
            color: "#fff",
          },
        },
        color: ["#00e389"],

        xAxis: [
          {
            // name: "(月)",
            // color: "#fff",
            type: "category",
            data: [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
              "(月)",
            ],
            interval: 2,
            //不显示刻度
            axisTick: {
              show: false,
            },
            //刻度标签文字颜色
            axisLabel: {
              color: "#fff",
            },

            axisLine: {
              show: true,
              color: "#fff",
              width: 2,
              opacity: 1,
              lineStyle: {
                color: "2a4691",
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#2a4691",
              },
            },
            // minInterval: 0.5,
            //紧挨边缘
            boundaryGap: false,
          },
          // {
          //   data: [
          //     "1",
          //     "2",
          //     "3",
          //     "4",
          //     "5",
          //     "6",
          //     "7",
          //     "8",
          //     "9",
          //     "10",
          //     "11",
          //     "12",
          //   ],
          //   splitLine: {
          //     show: true,
          //     lineStyle: {
          //       color: "#2a4691",
          //     },
          //   },
          // },
        ],

        yAxis: {
          name: "(万人))",
          nameGap: 25,
          type: "value",

          minorSplitLine: {
            // show: false,
          },
          // min: 0,
          max: 340,
          // splitNumber: 3,
          axisLine: {
            show: true,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#2a4691",
            },
          },
          axisLine: {
            lineStyle: {
              color: "2a4691",
            },
          },
          axisLabel: {
            color: "#fff",
          },
          interval: 100,
        },
        series: [
          {
            data: [90, 135, 140, 205, 170, 270, 210, 250, 250, 260, 260, 280],
            type: "line",
          },
        ],
      };
      //3.把配置项给实例对象
      myChart.setOption(option1);
      //让图表自适应屏幕
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },

    //世界地图
    map() {
      var myChart = echarts.init(document.getElementById("map"));
      var data = {
        world_map_dict: {
          美国: {
            attack_count: 4,
            ip_count: 4,
          },
          中国: {
            attack_count: 4,
            ip_count: 4,
          },
          俄罗斯: {
            attack_count: 4,
            ip_count: 4,
          },
        },
      };

      var dataToEn = {
        Canada: "加拿大",
        Turkmenistan: "土库曼斯坦",
        "Saint Helena": "圣赫勒拿",
        "Lao PDR": "老挝",
        Lithuania: "立陶宛",
        Cambodia: "柬埔寨",
        Ethiopia: "埃塞俄比亚",
        "Faeroe Is.": "法罗群岛",
        Swaziland: "斯威士兰",
        Palestine: "巴勒斯坦",
        Belize: "伯利兹",
        Argentina: "阿根廷",
        Bolivia: "玻利维亚",
        Cameroon: "喀麦隆",
        "Burkina Faso": "布基纳法索",
        Aland: "奥兰群岛",
        Bahrain: "巴林",
        "Saudi Arabia": "沙特阿拉伯",
        "Fr. Polynesia": "法属波利尼西亚",
        "Cape Verde": "佛得角",
        "W. Sahara": "西撒哈拉",
        Slovenia: "斯洛文尼亚",
        Guatemala: "危地马拉",
        Guinea: "几内亚",
        "Dem. Rep. Congo": "刚果（金）",
        Germany: "德国",
        Spain: "西班牙",
        Liberia: "利比里亚",
        Netherlands: "荷兰",
        Jamaica: "牙买加",
        "Solomon Is.": "所罗门群岛",
        Oman: "阿曼",
        Tanzania: "坦桑尼亚",
        "Costa Rica": "哥斯达黎加",
        "Isle of Man": "曼岛",
        Gabon: "加蓬",
        Niue: "纽埃",
        Bahamas: "巴哈马",
        "New Zealand": "新西兰",
        Yemen: "也门",
        Jersey: "泽西岛",
        Pakistan: "巴基斯坦",
        Albania: "阿尔巴尼亚",
        Samoa: "萨摩亚",
        "Czech Rep.": "捷克",
        "United Arab Emirates": "阿拉伯联合酋长国",
        Guam: "关岛",
        India: "印度",
        Azerbaijan: "阿塞拜疆",
        "N. Mariana Is.": "北马里亚纳群岛",
        Lesotho: "莱索托",
        Kenya: "肯尼亚",
        Belarus: "白俄罗斯",
        Tajikistan: "塔吉克斯坦",
        Turkey: "土耳其",
        Afghanistan: "阿富汗",
        Bangladesh: "孟加拉国",
        Mauritania: "毛里塔尼亚",
        "Dem. Rep. Korea": "朝鲜",
        "Saint Lucia": "圣卢西亚",
        "Br. Indian Ocean Ter.": "英属印度洋领地",
        Mongolia: "蒙古",
        France: "法国",
        "Cura?ao": "库拉索岛",
        "S. Sudan": "南苏丹",
        Rwanda: "卢旺达",
        Slovakia: "斯洛伐克",
        Somalia: "索马里",
        Peru: "秘鲁",
        Vanuatu: "瓦努阿图",
        Norway: "挪威",
        Malawi: "马拉维",
        Benin: "贝宁",
        "St. Vin. and Gren.": "圣文森特和格林纳丁斯",
        Korea: "韩国",
        Singapore: "新加坡",
        Montenegro: "黑山共和国",
        "Cayman Is.": "开曼群岛",
        Togo: "多哥",
        China: "中国",
        "Heard I. and McDonald Is.": "赫德岛和麦克唐纳群岛",
        Armenia: "亚美尼亚",
        "Falkland Is.": "马尔维纳斯群岛（福克兰）",
        Ukraine: "乌克兰",
        Ghana: "加纳",
        Tonga: "汤加",
        Finland: "芬兰",
        Libya: "利比亚",
        "Dominican Rep.": "多米尼加",
        Indonesia: "印度尼西亚",
        Mauritius: "毛里求斯",
        "Eq. Guinea": "赤道几内亚",
        Sweden: "瑞典",
        Vietnam: "越南",
        Mali: "马里",
        Russia: "俄罗斯",
        Bulgaria: "保加利亚",
        "United States": "美国",
        Romania: "罗马尼亚",
        Angola: "安哥拉",
        Chad: "乍得",
        "South Africa": "南非",
        Fiji: "斐济",
        Liechtenstein: "列支敦士登",
        Malaysia: "马来西亚",
        Austria: "奥地利",
        Mozambique: "莫桑比克",
        Uganda: "乌干达",
        Japan: "日本",
        Niger: "尼日尔",
        Brazil: "巴西",
        Kuwait: "科威特",
        Panama: "巴拿马",
        Guyana: "圭亚那",
        Madagascar: "马达加斯加",
        Luxembourg: "卢森堡",
        "American Samoa": "美属萨摩亚",
        Andorra: "安道尔",
        Ireland: "爱尔兰",
        Italy: "意大利",
        Nigeria: "尼日利亚",
        "Turks and Caicos Is.": "特克斯和凯科斯群岛",
        Ecuador: "厄瓜多尔",
        "U.S. Virgin Is.": "美属维尔京群岛",
        Brunei: "文莱",
        Australia: "澳大利亚",
        Iran: "伊朗",
        Algeria: "阿尔及利亚",
        "El Salvador": "萨尔瓦多",
        "C?te d'Ivoire": "科特迪瓦",
        Chile: "智利",
        "Puerto Rico": "波多黎各",
        Belgium: "比利时",
        Thailand: "泰国",
        Haiti: "海地",
        Iraq: "伊拉克",
        "S?o Tomé and Principe": "圣多美和普林西比",
        "Sierra Leone": "塞拉利昂",
        Georgia: "格鲁吉亚",
        Denmark: "丹麦",
        Philippines: "菲律宾",
        "S. Geo. and S. Sandw. Is.": "南乔治亚岛和南桑威奇群岛",
        Moldova: "摩尔多瓦",
        Morocco: "摩洛哥",
        Namibia: "纳米比亚",
        Malta: "马耳他",
        "Guinea-Bissau": "几内亚比绍",
        Kiribati: "基里巴斯",
        Switzerland: "瑞士",
        Grenada: "格林纳达",
        Seychelles: "塞舌尔",
        Portugal: "葡萄牙",
        Estonia: "爱沙尼亚",
        Uruguay: "乌拉圭",
        "Antigua and Barb.": "安提瓜和巴布达",
        Lebanon: "黎巴嫩",
        Uzbekistan: "乌兹别克斯坦",
        Tunisia: "突尼斯",
        Djibouti: "吉布提",
        Greenland: "格陵兰",
        "Timor-Leste": "东帝汶",
        Dominica: "多米尼克",
        Colombia: "哥伦比亚",
        Burundi: "布隆迪",
        "Bosnia and Herz.": "波斯尼亚和黑塞哥维那",
        Cyprus: "塞浦路斯",
        Barbados: "巴巴多斯",
        Qatar: "卡塔尔",
        Palau: "帕劳",
        Bhutan: "不丹",
        Sudan: "苏丹",
        Nepal: "尼泊尔",
        Micronesia: "密克罗尼西亚",
        Bermuda: "百慕大",
        Suriname: "苏里南",
        Venezuela: "委内瑞拉",
        Israel: "以色列",
        "St. Pierre and Miquelon": "圣皮埃尔和密克隆群岛",
        "Central African Rep.": "中非",
        Iceland: "冰岛",
        Zambia: "赞比亚",
        Senegal: "塞内加尔",
        "Papua New Guinea": "巴布亚新几内亚",
        "Trinidad and Tobago": "特立尼达和多巴哥",
        Zimbabwe: "津巴布韦",
        Jordan: "约旦",
        Gambia: "冈比亚",
        Kazakhstan: "哈萨克斯坦",
        Poland: "波兰",
        Eritrea: "厄立特里亚",
        Kyrgyzstan: "吉尔吉斯斯坦",
        Montserrat: "蒙特塞拉特",
        "New Caledonia": "新喀里多尼亚",
        Macedonia: "马其顿",
        Paraguay: "巴拉圭",
        Latvia: "拉脱维亚",
        Hungary: "匈牙利",
        Syria: "叙利亚",
        Honduras: "洪都拉斯",
        Myanmar: "缅甸",
        Mexico: "墨西哥",
        Egypt: "埃及",
        Nicaragua: "尼加拉瓜",
        Cuba: "古巴",
        Serbia: "塞尔维亚",
        Comoros: "科摩罗",
        "United Kingdom": "英国",
        "Fr. S. Antarctic Lands": "南极洲",
        Congo: "刚果（布）",
        Greece: "希腊",
        "Sri Lanka": "斯里兰卡",
        Croatia: "克罗地亚",
        Botswana: "博茨瓦纳",
        "Siachen Glacier": "锡亚琴冰川地区",
      };

      var newData = [];

      for (var a in data.world_map_dict) {
        for (var s in dataToEn) {
          if (dataToEn[s].indexOf(a) > -1) {
            newData.push({
              name: s,
              nameToCH: a,
              value: data.world_map_dict[a].attack_count,
              ip_count: data.world_map_dict[a].ip_count,
            });
          }
        }
      }

      var countrys = function (country, data, name) {
        return {
          name: country,
          value: name,
          data: data,
          itemStyle: {
            // borderColor: '#918597',
            areaColor: "rgba(0,0,0,0)",
          },

          label: {
            show: true,
            formatter: function (params) {
              return params.data.data.nameToCH;
            },
            color: "#fff",
            fontSize: 15,
          },

          emphasis: {
            itemStyle: {
              areaColor: "rgba(0,0,0,0)",
            },
            label: {
              show: false,
              color: "yellow",
            },
          },
          // zlevel:11
        };
      };

      var countryData = [];
      for (var i = 0; i < newData.length; i++) {
        countryData.push(
          countrys(newData[i].name, newData[i], newData[i].value)
        );
      }

      var option2 = {
        //背景颜色

        backgroundColor: "transparent ",

        roam: true,

        tooltip: {
          show: false,
          formatter: function (params) {
            if (params.data) {
              var toolTiphtml = "";
              toolTiphtml = params.data.data.nameToCH;
              return toolTiphtml;
            }
          },
          borderWidth: 1,
          //弹框的边框颜色
          borderColor: "#fff",
          alwaysShowContent: true,
        },
        visualMap: {
          orient: "horizontal",
          min: 1,
          max: newData.sort(function (a, b) {
            b.value - a.value;
          })[0].value,
          bottom: 30,
          calculable: true,
          seriesIndex: [0],
          inRange: {
            color: ["yellow", "yellow "], // 蓝绿
          },
          left: "center",
          show: false,
        },
        series: [
          {
            type: "map",
            mapType: "world",
            itemStyle: {
              areaColor: "rgba(0,0,0,0)",
              //地图边框线的颜色
              borderColor: "#72a8ff",
            },
            emphasis: {
              //鼠标触碰的颜色
              itemStyle: {
                // areaColor: "rgba(0,0,0,0)",
                areaColor: "yellow",
              },
              label: {
                normal: {
                  show: false,
                },
              },
            },
            label: {
              normal: {
                show: false,
              },
            },
            data: countryData,
          },
        ],
      };

      // var n = 0;
      // setInterval(function () {
      //   // console.log(countryData)
      //   myChart.dispatchAction({
      //     type: "showTip",
      //     seriesIndex: 0,
      //     show: true,
      //     name: countryData[n].name,
      //   });
      //   myChart.dispatchAction({
      //     type: "visualMap",
      //     seriesIndex: 0,
      //     name: countryData[n].name,
      //   });
      //   n++;
      //   if (n == countryData.length) {
      //     n = 0;
      //   }
      // }, 1500);

      //
      //3.把配置项给实例对象
      myChart.setOption(option2);
      //让图表自适应屏幕
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
  },
};
</script>

<style scoped>
.total {
  background: url(../assets/image/bg.jpg) no-repeat top center;
  background-size: 100% 100%;

  width: 100vw;
  /* height: 100vh; */
}
.el-container {
  width: 100%;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
}
.el-header {
  height: 160px !important;
  flex: 2;
}
.head1 {
  height: 80px;
  background: url(../assets/image/head_bg.png) no-repeat;
  background-size: 100% 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
}
.head2 {
  height: 80px;
  /* background-color: pink; */
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-main {
  min-width: 1624px;
  /* width: 120px; */
  max-width: 1780px;
  margin: 0.266667rem 0.266667rem 0 !important;
  /* background-color: red; */
  flex: 8;
  padding-bottom: 55px;
  margin-top: 0;

  /* display: flex; */
  position: relative;
  box-sizing: border-box;
}
.left {
  /* flex: 5; */
  position: relative;
}

.left .top {
  position: absolute;
  top: 0;
  left: 0;
  height: 2px;
  width: 80%;
  /* background-color: #fff; */
  background: linear-gradient(to right, #36acdc, #050e52, #36acdc);
}
.left .left {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 2px;
  /* background-color: #fff; */
  background: linear-gradient(to top, #36acdc, #050e52, #36acdc);
}
.left .bottom {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 2px;
  width: 100%;
  /* background-color: #fff; */
  background: linear-gradient(to left, #36acdc, #050e52, #36acdc);
}
.left .right {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 101%;
  width: 2px;
  /* background-color: #fff; */
  background: linear-gradient(to top, #36acdc, #050e52, #36acdc);
  transform: rotate(-8.5deg);
  transform-origin: right bottom;
}

.right {
  /* flex: 5; */
  /* background-color: yellow; */
  display: flex;
  flex-direction: column;
  /* border: 1px solid #fff; */
  position: relative;
}
.right .top {
  position: absolute;
  top: 0;
  right: 0;
  height: 2px;
  width: 80%;
  /* background-color: #fff; */
  background: linear-gradient(to right, #36acdc, #050e52, #36acdc);
}
.right .right {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 2px;
  /* background-color: #fff; */
  background: linear-gradient(to top, #36acdc, #050e52, #36acdc);
}
.right .bottom {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 2px;
  width: 100%;
  /* background-color: #fff; */
  background: linear-gradient(to left, #36acdc, #050e52, #36acdc);
}
.right .left {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 101%;
  width: 2px;
  /* background-color: #fff; */
  background: linear-gradient(to top, #36acdc, #050e52, #36acdc);
  transform: rotate(8.5deg);
  transform-origin: left bottom;
}
.center {
  /* flex: 4; */
  /* background-color: red; */
  position: relative;
  /* width: 720px; */
  width: 460px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.left1 {
  width: 600px;
  height: 800px;
  /* background-color: pink; */
  /* border: 3px solid #071570; */
  display: flex;
  flex-direction: column;
}

.leftTop {
  flex: 6;
  display: flex;
  flex-direction: column;
}
.leftBottom {
  flex: 1;
}
.leftTop .text {
  display: flex;
  font-size: 16px;
  position: relative;
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #f0f3f7;
}
.leftTop .echarts {
  flex: 7;
}
.leftTop .text .text1 {
  position: absolute;
  left: -10%;
  position: relative;
  display: flex;
  width: 230px;
  height: 40px;
  align-items: center;
  justify-content: center;
}
.leftTop .text .text1 .text11 {
  position: absolute;
  /* flex: 8; */
}
.leftTop .text .text1 .none {
  flex: 2;
}

.leftTop .text .text1 .linear1 {
  flex: 1;
  height: 100%;
  background-image: linear-gradient(to left, #0755b5, #020b49);
}
.leftTop .text .text1 .linear2 {
  flex: 1;
  height: 100%;

  background-image: linear-gradient(to right, #0755b5, #020b49);
}
.leftBottom {
  flex: 4;
  display: flex;
  flex-direction: column;
}

.leftBottom .text {
  display: flex;
  position: relative;
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #f0f3f7;
}
.leftBottom .echarts {
  flex: 7;
}
.leftBottom .text .text1 {
  position: absolute;
  left: -10%;
  position: relative;
  display: flex;
  width: 230px;
  height: 40px;
  align-items: center;
  justify-content: center;
}
.leftBottom .text .text1 .text11 {
  position: absolute;
}

.leftBottom .text .text1 .linear1 {
  flex: 1;
  height: 100%;
  background-image: linear-gradient(to left, #0755b5, #020b49);
}
.leftBottom .text .text1 .linear2 {
  flex: 1;
  height: 100%;

  background-image: linear-gradient(to right, #0755b5, #010e45);
}
.rightTop {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.rightCenter {
  flex: 2;
}
.rightBottom {
  flex: 5;
  position: relative;
}
.right1 {
  /* border: 1px solid #071570; */
  width: 600px;
  height: 800px;
  display: flex;
  flex-direction: column;
  /* position: absolute; */
  top: 0;
  right: 0px;
}
.right1 .text {
  display: flex;
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #f0f3f7;
}

.right1 .text .text1 {
  position: absolute;
  left: 10%;
  position: relative;
  display: flex;
  width: 230px;
  height: 40px;
  align-items: center;
  justify-content: center;
}
.right1 .text .text1 .text11 {
  position: absolute;
}

.right1 .text .text1 .linear1 {
  flex: 1;
  height: 100%;
  background-image: linear-gradient(to left, #0755b5, #020b49);
}
.right1 .text .text1 .linear2 {
  flex: 1;
  height: 100%;

  background-image: linear-gradient(to right, #0755b5, #010e45);
}
#bar {
  position: absolute;
  /* top: 10px; */
  left: 60px;
  width: 500px;
  height: 550px;
}
#line {
  width: 500px;
  height: 350px;
}
#map {
  width: 500px;
  height: 300px;
}
.head2 .item {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.head2 .item .left {
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-right: 0.666667rem; */
}
.head2 .item .right {
  flex: 6;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: transparent;
}
.head2 .item .circle1 {
  /* position: absolute; */
  top: 0;
  width: 70px;
  height: 70px;
  /* background-color: red; */
  border-left: 2px solid darkblue;
  border-right: 2px solid darkblue;

  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.circle1 .circle2 {
  width: 55px;
  height: 55px;
  border: 1px solid blue;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.circle1 .circle2 .circle3 {
  width: 48px;
  height: 48px;
  border: 1px solid blue;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.circle1 .circle2 .circle3 .iconfont {
  font-size: 40px;
}
.item .right .righttop {
  color: #12c8eb;
  font-size: 25px;
}
.item .right .rightbottom {
  color: #fff;
  font-size: 15px;
}
.iconfont {
  color: #1fd3f5;
}
.none {
  flex: 2.5;
}

.center .center1 {
  /* transform: translateX(-50%); */

  position: absolute;
  left: 50%;
  top: 10%;
  transform: translateX(-50%);
  /* border: 2px solid yellow; */
  border-radius: 50%;
  overflow: hidden;

  /* width: 100%; */
  /* height: 100%; */
}
.center .center1 .img {
}
.center .center1 .img img {
  /* width: 200px; */

  overflow: hidden;
  left: 50%;
}
.center .bg1 {
  position: relative;
  position: absolute;
  top: 150px;
  left: -60px;
}
.center .bg1 img {
  width: 100px;
  position: absolute;
}
.center .bg1 .text1 {
  position: absolute;
  color: #fff;
  top: 1rem;
  left: 2.133333rem;
}
.center .bg1 .text2 {
  position: absolute;
  color: #fff;
  left: 2rem;
  font-size: 6px;
  top: 5.5rem;
  width: 40px;
}
.center .bg2 {
  position: relative;
  position: absolute;
  top: 150px;
  left: 410px;
}
.center .bg2 img {
  width: 100px;
  position: absolute;
}
.center .bg2 .text1 {
  position: absolute;
  color: #fff;
  top: 1rem;
  left: 2.133333rem;
}
.center .bg2 .text2 {
  position: absolute;
  color: #fff;
  left: 2rem;
  font-size: 6px;
  top: 5.5rem;
  width: 40px;
}
.center .bg3 {
  position: relative;
  position: absolute;
  top: 320px;
  left: -10px;
}
.center .bg3 img {
  width: 100px;
  position: absolute;
}
.center .bg3 .text1 {
  position: absolute;
  color: #fff;
  top: 1rem;
  left: 2.133333rem;
}
.center .bg3 .text2 {
  position: absolute;
  color: #fff;
  left: 2rem;
  font-size: 6px;
  top: 5.5rem;
  width: 40px;
}
.center .bg4 {
  position: relative;
  position: absolute;
  top: 320px;
  left: 378px;
}
.center .bg4 img {
  width: 100px;
  position: absolute;
}
.center .bg4 .text1 {
  position: absolute;
  color: #fff;
  top: 1rem;
  left: 2.133333rem;
}
.center .bg4 .text2 {
  position: absolute;
  color: #fff;
  left: 2rem;
  font-size: 6px;
  top: 5.5rem;
  width: 40px;
}
.center .bg5 {
  position: relative;
  position: absolute;
  top: 420px;
  left: 200px;
}
.center .bg5 img {
  width: 100px;
  position: absolute;
}
.center .bg5 .text1 {
  position: absolute;
  color: #fff;
  top: 1rem;
  left: 2.133333rem;
}
.center .bg5 .text2 {
  position: absolute;
  color: #fff;
  left: 2rem;
  font-size: 6px;
  top: 5.5rem;
  width: 40px;
}
.rightCenter {
  display: flex;
  align-items: center;
}
.rightCenter .imgleft {
  flex: 8;
  display: flex;
  align-items: center;
  justify-content: center;
}

.rightCenter .imgleft img {
  width: 60%;
}
.rightCenter .imgright {
  height: 60%;
  flex: 4;
  /* border-top: 1px solid red; */
  /* border-bottom: 1px solid red; */
  position: relative;
  /* display: flex;
  flex-direction: column; */
}
.rightCenter .imgright .num {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 10%;
  color: #66cbd9;
  font-size: 20px;
}
.rightCenter .imgright .text {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 60%;
  color: #fff;
  font-size: 12px;
}
.none1 {
  flex: 2;
}
.rightCenter .imgright .topbox {
  /* flex: 6; */
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, #071b5d, #2d6da9);
  opacity: 0.2;
}
.rightCenter .imgright .topbox1 {
  width: 100%;
  height: 2px;
  /* background-color: #fff; */
  background: linear-gradient(to right, #1e4585, #2d6da9, #1e4585);
  /* box-shadow: 0 80px 40px 80px blue; */
  /* 水平 垂直 模糊距离 尺寸 */
  position: relative;
}
.rightCenter .imgright .topbox1::before {
  content: "";
  position: absolute;
  width: 4px;
  top: -100%;
  left: -4%;
  border-left: 4px solid transparent;
  border-right: 4px solid #fff;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
}
.rightCenter .imgright .topbox1::after {
  content: "";
  position: absolute;
  width: 4px;
  top: -100%;
  right: -4%;
  border-right: 4px solid transparent;
  border-left: 4px solid #fff;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
}
.rightCenter .imgright .bottombox::before {
  content: "";
  position: absolute;
  width: 4px;
  top: -100%;
  left: -4%;
  border-left: 4px solid transparent;
  border-right: 4px solid blue;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
}
.rightCenter .imgright .bottombox::after {
  content: "";
  position: absolute;
  width: 4px;
  top: -100%;
  right: -4%;
  border-right: 4px solid transparent;
  border-left: 4px solid blue;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
}
.rightCenter .imgright .bottombox {
  /* flex: 4; */
  width: 100%;
  height: 2px;
  /* background-color: #fff; */
  position: absolute;
  bottom: 0;
  /* background: linear-gradient(to right, purple, #2d6da9, blue); */
  background: linear-gradient(to right, #1e4585, #2d6da9, #1e4585);
}
</style>