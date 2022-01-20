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
  for (var n = aya.length; n--; ) {
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
