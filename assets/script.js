const drinks = [
  {
    id: "xian-yun",
    name: "閒雲樓閣",
    category: "清香・冷萃",
    description: "清檸輕落，烏龍的蘭花香隨後展開。",
    origin: "南投・高山烏龍",
    notes: "檸檬皮｜白花｜山泉",
    color: "#b8cdb5",
    accent: "#d9e8c9",
  },
  {
    id: "mi-tang",
    name: "蜜糖時光",
    category: "醇厚・鮮乳",
    description: "熟果紅茶相遇鮮乳，甜潤而不厚重。",
    origin: "日月潭・紅玉紅茶",
    notes: "熟果｜蜂蜜｜柔乳",
    color: "#bc7951",
    accent: "#e7bb78",
  },
  {
    id: "meng-hong",
    name: "夢想虹光",
    category: "繽紛・特調",
    description: "茶香、可可與細碎糖晶，交疊成一場小小盛宴。",
    origin: "阿里山・紅茶基底",
    notes: "可可｜香草｜糖晶",
    color: "#9b5960",
    accent: "#df9a78",
  },
  {
    id: "yu-lu",
    name: "雨露青峰",
    category: "清雅・純茶",
    description: "春茶嫩芽輕焙，留下雨後青草與淡淡花韻。",
    origin: "梨山・青心烏龍",
    notes: "嫩葉｜梔子｜青苔",
    color: "#91aa87",
    accent: "#ced9a9",
  },
  {
    id: "mu-jin",
    name: "暮金流光",
    category: "溫潤・焙香",
    description: "金萱柔滑，炭焙尾韻像夕光般緩緩沉下。",
    origin: "嘉義・焙香金萱",
    notes: "奶香｜焦糖｜木質",
    color: "#c28b4f",
    accent: "#edd39a",
  },
  {
    id: "bai-yu",
    name: "白玉蘭庭",
    category: "花韻・冷萃",
    description: "以低溫慢萃留住細緻花香，清透如晨霧。",
    origin: "坪林・包種茶",
    notes: "玉蘭｜青梨｜甘蔗",
    color: "#c1aa84",
    accent: "#eee0bf",
  },
  {
    id: "yun-shan",
    name: "雲山入夢",
    category: "甘醇・純茶",
    description: "高山烏龍層層舒展，回甘後有清甜的山氣。",
    origin: "梨山・高山烏龍",
    notes: "蘭花｜水梨｜甘韻",
    color: "#9baf9c",
    accent: "#d4dfcb",
  },
  {
    id: "hong-chen",
    name: "紅塵月白",
    category: "柔和・鮮乳",
    description: "紅茶與鮮乳交融，焦糖香裡帶一抹溫柔。",
    origin: "魚池・紅玉紅茶",
    notes: "肉桂｜焦糖｜鮮乳",
    color: "#9d5947",
    accent: "#d29369",
  },
  {
    id: "qing-luan",
    name: "青鸞有信",
    category: "明亮・果茶",
    description: "青心烏龍揉合柚香，清爽中帶細緻茶韻。",
    origin: "南投・青心烏龍",
    notes: "柚子｜白花｜青茶",
    color: "#a7bd8a",
    accent: "#e4d27e",
  },
  {
    id: "xing-he",
    name: "星河慢煮",
    category: "濃郁・特調",
    description: "慢煮紅茶與黑糖珍珠相疊，深邃而柔軟。",
    origin: "魚池・台茶十八號",
    notes: "黑糖｜熟果｜麥芽",
    color: "#704b3a",
    accent: "#bd8950",
  },
  {
    id: "tao-ying",
    name: "桃影春澗",
    category: "花果・冷萃",
    description: "白桃的清甜輕吻春茶，尾韻浮起淡淡花香。",
    origin: "坪林・文山包種",
    notes: "白桃｜野薑花｜春芽",
    color: "#d39a82",
    accent: "#f0d0b1",
  },
  {
    id: "lan-ting",
    name: "蘭亭夜雨",
    category: "沉靜・純茶",
    description: "中焙烏龍緩緩回甘，夜色裡有幽微蘭香。",
    origin: "杉林溪・烏龍茶",
    notes: "蘭花｜榛果｜焙火",
    color: "#7f8e71",
    accent: "#b5b686",
  },
  {
    id: "ye-lan",
    name: "夜蘭聞香",
    category: "深焙・純茶",
    description: "足火烏龍沉靜醇厚，喉間留有木質甜香。",
    origin: "木柵・鐵觀音",
    notes: "炭焙｜蘭香｜熟果",
    color: "#8a6a4e",
    accent: "#c09b6d",
  },
  {
    id: "chun-sheng",
    name: "春聲細語",
    category: "輕盈・鮮乳",
    description: "春摘青茶與鮮乳相映，柔滑之中仍見茶香。",
    origin: "名間・四季春",
    notes: "白花｜蔗糖｜柔乳",
    color: "#a2b99b",
    accent: "#e0d9b3",
  },
  {
    id: "mo-xiang",
    name: "墨香琥珀",
    category: "醇厚・純茶",
    description: "古樹紅茶低溫慢焙，蜜香深處透著木韻。",
    origin: "阿里山・台灣紅茶",
    notes: "龍眼蜜｜木質｜可可",
    color: "#956344",
    accent: "#d0a268",
  },
  {
    id: "qing-lian",
    name: "清蓮映月",
    category: "清透・冷萃",
    description: "冷萃包種茶帶出青梨與白花，清新細緻。",
    origin: "坪林・文山包種",
    notes: "青梨｜白蓮｜甘蔗",
    color: "#aebc9e",
    accent: "#e0e1bc",
  },
  {
    id: "jin-ye",
    name: "金葉拾光",
    category: "醇香・奶茶",
    description: "以紅玉茶湯慢熬，奶香包覆肉桂與薄荷。",
    origin: "魚池・紅玉紅茶",
    notes: "肉桂｜薄荷｜香草",
    color: "#ab7451",
    accent: "#e6c591",
  },
  {
    id: "shan-yue",
    name: "山月松風",
    category: "清雅・純茶",
    description: "冷杉林間的想像，落在清爽回甘的高山茶裡。",
    origin: "大禹嶺・高山烏龍",
    notes: "松木｜蘭花｜山泉",
    color: "#788b76",
    accent: "#c0cda7",
  },
];

const pageSize = 6;
const pageCount = Math.ceil(drinks.length / pageSize);
const grid = document.querySelector("#drink-grid");
const currentPageLabel = document.querySelector("#current-page");
const previousButton = document.querySelector("#previous-page");
const nextButton = document.querySelector("#next-page");
const dotsContainer = document.querySelector("#page-dots");
let currentPage = 0;

function createDrinkCard(drink, index) {
  const card = document.createElement("article");
  card.className = "drink-card";
  card.tabIndex = 0;
  card.style.setProperty("--drink", drink.color);
  card.style.setProperty("--accent", drink.accent);

  const top = document.createElement("div");
  top.className = "drink-card-top";
  const category = document.createElement("span");
  category.textContent = drink.category;
  const number = document.createElement("span");
  number.textContent = String(index + 1).padStart(2, "0");
  top.append(category, number);

  const art = document.createElement("div");
  art.className = "drink-art";
  art.setAttribute("aria-hidden", "true");
  const glass = document.createElement("div");
  glass.className = "tea-glass";
  const liquid = document.createElement("span");
  liquid.className = "tea-liquid";
  const garnish = document.createElement("span");
  garnish.className = "tea-garnish";
  const pearl = document.createElement("span");
  pearl.className = "tea-pearl";
  glass.append(liquid, garnish, pearl);
  art.append(glass);

  const details = document.createElement("div");
  details.className = "drink-details";
  const name = document.createElement("h3");
  name.textContent = drink.name;
  const description = document.createElement("p");
  description.className = "drink-description";
  description.textContent = drink.description;
  const origin = document.createElement("p");
  origin.className = "drink-origin";
  origin.textContent = drink.origin;
  const notes = document.createElement("p");
  notes.className = "drink-notes";
  notes.textContent = drink.notes;
  details.append(name, description, origin, notes);

  card.append(top, art, details);
  return card;
}

function renderPage(page) {
  currentPage = Math.max(0, Math.min(page, pageCount - 1));
  const start = currentPage * pageSize;
  const pageDrinks = drinks.slice(start, start + pageSize);
  const cards = pageDrinks.map((drink, index) => createDrinkCard(drink, start + index));

  grid.replaceChildren(...cards);
  currentPageLabel.textContent = String(currentPage + 1).padStart(2, "0");
  previousButton.disabled = currentPage === 0;
  nextButton.disabled = currentPage === pageCount - 1;
  grid.setAttribute("aria-label", `第 ${currentPage + 1} 頁，共 ${pageCount} 頁茶飲`);
  Array.from(dotsContainer.children).forEach((dot, index) => {
    const active = index === currentPage;
    dot.setAttribute("aria-current", active ? "page" : "false");
  });
}

for (let page = 0; page < pageCount; page += 1) {
  const dot = document.createElement("button");
  dot.className = "page-dot";
  dot.type = "button";
  dot.setAttribute("aria-label", `前往第 ${page + 1} 頁茶飲`);
  dot.addEventListener("click", () => renderPage(page));
  dotsContainer.append(dot);
}

previousButton.addEventListener("click", () => renderPage(currentPage - 1));
nextButton.addEventListener("click", () => renderPage(currentPage + 1));
renderPage(0);
