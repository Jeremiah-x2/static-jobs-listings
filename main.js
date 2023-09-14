window.addEventListener("DOMContentLoaded", () => {
  displayFunction(getData());
});

async function getData() {
  const response = await fetch("data.json");
  let data = response.json();
  return data;
}

async function displayData(a) {
  let d = await a;

  // DISPLAY

  d.forEach((item) => {
    let {
      company,
      logo,
      new: New,
      position,
      featured,
      role,
      level,
      postedAt,
      contract,
      location,
      languages,
      tools,
    } = item;

    let div = `
    <div class="bg-white relative ${
      featured ? "border-4 border-l-DesaturatedDKCyan border-transparent" : ""
    } py-6 px-8 rounded-lg lg:flex lg:items-center">
    
    <div class="absolute w-[60px] top-0 -translate-y-1/2 lg:relative lg:translate-y-0 lg:mr-4">
        <img src=${logo} alt=${company} class="" />
    </div>

    <div class="lg:flex lg:items-center lg:justify-between lg:flex-1">
      <div>
        <div class="flex gap-4 items-center my-4 lg:my-1">
            <span class="text-DesaturatedDKCyan font-bold text-lg">${company}</span>
            ${
              New
                ? "<span class='bg-DesaturatedDKCyan text-white font-bold px-2 py-1 text-sm rounded-full'>NEW!</span>"
                : ""
            }    
            ${
              featured
                ? "<span class='bg-black text-white font-bold text-sm px-2 py-1 rounded-full'>FEATURED</span>"
                : ""
            }        
        </div>

        <div class="border-b-2 pb-4 lg:pb-0 mb-4 lg:mb-0 lg:border-none">
            <p class="text-vDKGrayishCyan hover:cursor-pointer hover:text-DesaturatedDKCyan inline  font-bold mb-6 lg:mb-1">${position}</P>
            <div class="flex items-center gap-2 content-center text-dkGrayishCyan font-bold">
              <span>${postedAt}</span>
              <span>.</span>
              <span>${contract}</span>
              <span>.</span>
              <span>${location}</span>
            </div>
        </div>
      </div>



      <div>
          <ul class="lang flex gap-4 flex-wrap">
            <li class="hover:bg-DesaturatedDKCyan hover:text-white hover:cursor-pointer">${role}</li>
            <li class="hover:bg-DesaturatedDKCyan hover:text-white hover:cursor-pointer">${level}</li>
            ${languages
              .map((item) => {
                return `<li class="hover:bg-DesaturatedDKCyan hover:text-white hover:cursor-pointer">${item}</li>`;
              })
              .join("")}
            ${tools
              .map((item) => {
                return `<li class="hover:bg-DesaturatedDKCyan hover:text-white hover:cursor-pointer">${item}</li>`;
              })
              .join("")}
          </ul>
      </div>
    </div>
<div>
    `;

    return (document.querySelector("#postings").innerHTML += `${div}`);
  });
}
let listArr;

async function filterData(a) {
  let b = await getData();
  let c = b.filter((item) => {
    return item.role === a;
  });
  console.log(c);
  displayData(c);
}

async function displayFunction(d) {
  let a = await d;
  let b = await displayData(a);
  document.querySelectorAll(".lang li").forEach((item) => {
    item.addEventListener("click", (e) => {
      console.log(e.target.innerHTML);
      let s = a.filter((i) => {
        return i.role === e.target.innerHTML;
      });
      console.log(s.length);
      if (s.length === 0) {
        return a;
      }
      let filterDiv = `
      <div class="absolute z-10 top-0 -translate-y-1/2 bg-white px-6 py-2 rounded-lg -translate-x-1/2 left-1/2 shadow-2xl">
        <div class="flex items-stretch bg-lthGrayishCyan rounded-md overflow-hidden">
          <span class="px-2 py-1 text-DesaturatedDKCyan font-bold">${e.target.innerHTML}</span>
          <img src="./images/icon-remove.svg" alt="X" class="bg-DesaturatedDKCyan hover:bg-vDKGrayishCyan hover:cursor-pointer p-2" id="x" />
        </div>
      </div>
      `;
      document.querySelector("#postings").innerHTML = filterDiv;
      displayFunction(s);
    });
  });
  document.querySelector("#x").addEventListener("click", () => {
    document.querySelector("#postings").innerHTML = "";
    displayFunction(getData());
  });
  // let c = filterData(listArr[0]);
}
