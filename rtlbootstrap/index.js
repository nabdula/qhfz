var response = {
  verses: [
    {
      id: 1,
      verse_key: "1:1",
      code_v2: "ﱁ ﱂ ﱃ ﱄ ﱅ",
      v2_page: 1,
    },
    {
      id: 2,
      verse_key: "1:2",
      code_v2: "ﱆ ﱇ ﱈ ﱉ ﱊ",
      v2_page: 1,
    },
    {
      id: 3,
      verse_key: "1:3",
      code_v2: "ﱋ ﱌ ﱍ",
      v2_page: 1,
    },
    {
      id: 4,
      verse_key: "1:4",
      code_v2: "ﱎ ﱏ ﱐ ﱑ",
      v2_page: 1,
    },
    {
      id: 5,
      verse_key: "1:5",
      code_v2: "ﱒ ﱓ ﱔ ﱕ ﱖ",
      v2_page: 1,
    },
    {
      id: 6,
      verse_key: "1:6",
      code_v2: "ﱗ ﱘ ﱙ ﱚ",
      v2_page: 1,
    },
    {
      id: 7,
      verse_key: "1:7",
      code_v2: "ﱛ ﱜ ﱝ ﱞ ﱟ ﱠ ﱡ ﱢ ﱣ ﱤ",
      v2_page: 1,
    },
  ],
};

var output = document.getElementById("output");

for (var i = 0; i < response.verses.length; i++) {
  var aya = response.verses[i]["code_v2"];
  output.innerHTML += `<div><p>`;
  for (var n = 0; n < aya.length; n++) {
    var glyph = aya[n];
    if (glyph == " ") {
      // space between glyphs in aya
      output.innerHTML += `<span class="ayaSpace">&nbsp;</span>`;
    } else if (glyph !== " " && n < aya.length - 1) {
      // aya regular glyph
      output.innerHTML += `<span class="ayaWord" ondblclick="event.preventDefault();selectRange(this)"; oncontextmenu="event.preventDefault();highlightAyaWord(this);">${aya[n]}</span>`;
    } else if (glyph !== " " && n == aya.length - 1) {
      // aya number glyph (aya sign), (last glyph)
      output.innerHTML += `<span class="ayaSign">${aya[n]}</span>`;
    }
  }
  output.innerHTML += `</div>`;
}

function highlightAyaWord(el) {
  if (el.className == "ayaWord") {
    el.className = "ayaWord ayaWordHighlighted";
  } else {
    el.className = "ayaWord";
  }
}

function selectRange(el) {
  var range, selection;
  if (window.getSelection && document.createRange) {
    selection = window.getSelection();
    range = document.createRange();
    range.selectNodeContents(el);
    selection.removeAllRanges();
    selection.addRange(range);
  } else if (document.selection && document.body.createTextRange) {
    range = document.body.createTextRange();
    range.moveToElementText(el);
    range.select();
  }
}

















































// // // url breakdown by its params
// // var url = new URL(location);
// // var urlByWhat = url.searchParams.get("by");

// // var urlUsefulParam, mongoQuery;
// // urlUsefulParam = parseInt(url.searchParams.get("n"));
// // if (urlByWhat == "aya") {
// //   mongoQuery = { qid: urlUsefulParam };
// // } else if (urlByWhat == "sura") {
// //   mongoQuery = { sura_no: urlUsefulParam };
// // } else if (urlByWhat == "page") {
// //   mongoQuery = { page: urlUsefulParam };
// // } else if (urlByWhat == "jozz") {
// //   mongoQuery = { jozz: urlUsefulParam };
// // }

// // url breakdown as string (easier to navigate for now)
// var url = new URL(location);
// var urlAffix = url.toString().split("?")[1];

// var urlUsefulParam, mongoQuery;
// urlUsefulParam = parseInt(urlAffix.match(/\d+/)[0]);
// if (urlAffix.includes("aya") || urlAffix.startsWith("a")) {
//   mongoQuery = { qid: urlUsefulParam };
// } else if (urlAffix.includes("sura") || urlAffix.startsWith("s")) {
//   mongoQuery = { sura_no: urlUsefulParam };
// } else if (urlAffix.includes("page") || urlAffix.startsWith("p")) {
//   mongoQuery = { page: urlUsefulParam };
// } else if (urlAffix.includes("jozz") || urlAffix.startsWith("j")) {
//   mongoQuery = { jozz: urlUsefulParam };
// }



// mfind("ayas", mongoQuery).then((gottenAyas) => {
//   gottenAyas.sort((a, b) => a.qid - b.qid); //sort by aya quran id (qid)
//   var groupedSuras = groupIntoArrays(gottenAyas, "sura_no"); //group ayas into their sura
//   for (const ayaArray of groupedSuras) {
//     var currentSuraNumber = ayaArray[0].sura_no;
//     var currentSuraName = ayaArray[0].sura_name_ar;
//     output.innerHTML += `</br>${currentSuraNumber} - ${currentSuraName}`;
//     output.innerHTML += "</br>-----------------</br>";

//     for (var i = 0; i < ayaArray.length; i++){
//       var currentAya = ayaArray[i];
//       let p = document.createElement("p");
//       p.append(currentAya.aya_text);
//       output.append(p);
//       // document.getElementById("output").innerText += aya.aya_text;
//     }
//   }
// });


// function groupIntoArrays(array, key) {
//   return Array.from(array.reduce((m, o) => m.set(o[key], [...(m.get(o[key]) || []), o]), new Map()).values());
// }


// $(".clickable").on('click touchstart', function () {
//   s = window.getSelection();
//   var range = s.getRangeAt(0);
//   var node = s.anchorNode;
//   while (range.toString().indexOf(' ') != 0) {
//     range.setStart(node, (range.startOffset - 1));
//   }
//   range.setStart(node, range.startOffset + 1);
//   do {
//     range.setEnd(node, range.endOffset + 1);

//   }
//   while (range.toString().indexOf(' ') == -1 && range.toString().trim() != '');
//   var str = range.toString().trim();
//   //alert(str);
// });
