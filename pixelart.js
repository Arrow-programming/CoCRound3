
//arrow being arrow
const PixelArt = (() => {
    const PAL = {
        'a':[224,221,211,255],
        'b':[65,11,11,255],
        'c':[112,18,17,255],
        'd':[133,24,24,255],
        'e':[21,65,11,255],
        'f':[27,82,15,255],
        'g':[29,95,14,255],
        'h':[17,66,89,255],
        'i':[24,95,129,255],
        'j':[28,110,150,255],
        'k':[39,18,50,255],
        'l':[52,25,67,255],
        'm':[65,31,84,255],
    };
    
    const GFX = [
        // Red Tiles
        [
            " bbbbbbbbbbbbbbbbb",
            "bbdddddddddddddddbb",
            "bccccccccbdcccccddb",
            "bccccccccbdccccccdb",
            "bccccccccbddcccccdb",
            "bcccccccbbbdcccccdb",
            "bbccccccbbbdcccccdb",
            "bbcccddddddddddccdb",
            "bbcccbbdbbbdbbddddb",
            "bbbbbbbdbcbdbbbbbdb",
            "bbcccbbcbbbdbbcccdb",
            "bbcccccccdddcccccdb",
            "bbccccccbbbdcccccdb",
            "bbccccccbbbccccccdb",
            "bbcccccccbcccccccdb",
            "bbcccccccbcccccccdb",
            "bbbccccccbcccccccdb",
            "bbbbbbbbbbbbbccccbb",
            " bbbbbbbbbbbbbbbbb",
        ],
        [
            "      bbaaaaabb",
            "       bbaaabb",
            "        bbabb",
            "         bbb",
        ],
        [
            "",
            "",
            "",
            "",
            "",
            "",
            "                  b",
            "                 bb",
            "                bba",
            "               bbaa",
            "               baaa",
            "               bbaa",
            "                bba",
            "                 bb",
            "                  b",
        ],
        [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "         bbb",
            "        bbabb",
            "       bbaaabb",
            "      bbaaaaabb",
        ],
        [
            "",
            "",
            "",
            "",
            "",
            "",
            "b",
            "bb",
            "abb",
            "aabb",
            "aaab",
            "aabb",
            "abb",
            "bb",
            "b",
        ],
        
        //Green Tiles
        [
            " eeeeeeeeeeeeeeeee",
            "eefffffffffffffffee",
            "efffggggfgggggggffe",
            "efffeeegfeeeeeeggfe",
            "effeeeegfeeeeeeegfe",
            "effeeefffffffeeegfe",
            "eefeefffffffffeegfe",
            "eefeefffggggffffffe",
            "eefeefffeeegffgggfe",
            "eefeefffeeegffeegfe",
            "eeffffffeeegffeegfe",
            "eefgggffffffffeegfe",
            "eefeeggfffffffeegfe",
            "eefeeegggggffeeegfe",
            "eefeeeeeeegfeeeegfe",
            "eeffeeeeeegfeeefffe",
            "eeefffffffffffffffe",
            "eeeeeeeeeeeeeffffee",
            " eeeeeeeeeeeeeeeee",
        ],
        [
            "      eeaaaaaee",
            "       eeaaaee",
            "        eeaee",
            "         eee",
        ],
        [
            "",
            "",
            "",
            "",
            "",
            "",
            "                  e",
            "                 ee",
            "                eea",
            "               eeaa",
            "               eaaa",
            "               eeaa",
            "                eea",
            "                 ee",
            "                  e",
        ],
        [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "         eee",
            "        eeaee",
            "       eeaaaee",
            "      eeaaaaaee",
        ],
        [
            "",
            "",
            "",
            "",
            "",
            "",
            "e",
            "ee",
            "aee",
            "aaee",
            "aaae",
            "aaee",
            "aee",
            "ee",
            "e",
        ],
        
        //Blue Tiles
        [
            " hhhhhhhhhhhhhhhhh",
            "hhjjjjjjjjjjjjjjjhh",
            "hiihiiiiiiiiiiihjjh",
            "hihihiiiiiiiiihihjh",
            "hiihhiiiiiiiiihhijh",
            "hiiiiihhhhhhhiiiijh",
            "hhiiihhhhhhhhhiiijh",
            "hhiiihhiiiiihhiiijh",
            "hhiiihhiijjihhiiijh",
            "hhiiihhiiijihhiiijh",
            "hhiiihhiiiiihhiiijh",
            "hhiiihhiiiiihhiiijh",
            "hhiiihhhhhhhhhiiijh",
            "hhiiiihhhhhhhiiiijh",
            "hhihhiiiiiiiiihhijh",
            "hhhihiiiiiiiiihihjh",
            "hhhhiiiiiiiiiiihijh",
            "hhhhhhhhhhhhhiiiihh",
            " hhhhhhhhhhhhhhhhh",
        ],
        [
            "      hhaaaaahh",
            "       hhaaahh",
            "        hhahh",
            "         hhh",
        ],
        [
            "",
            "",
            "",
            "",
            "",
            "",
            "                  h",
            "                 hh",
            "                hha",
            "               hhaa",
            "               haaa",
            "               hhaa",
            "                hha",
            "                 hh",
            "                  h",
        ],
        [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "         hhh",
            "        hhahh",
            "       hhaaahh",
            "      hhaaaaahh",
        ],
        [
            "",
            "",
            "",
            "",
            "",
            "",
            "h",
            "hh",
            "ahh",
            "aahh",
            "aaah",
            "aahh",
            "ahh",
            "hh",
            "h",
        ],
        // Bomb tiles
        [
            " kkkkkkkkkkkkkkkkk",
            "kkmmmmmmmmmmmmmmmkk",
            "klllllllllllllllmmk",
            "kllmmmmlmmmlmmmmlmk",
            "kllmkkklmkmlkkkmlmk",
            "kllmkmmlmkmlmmkmlmk",
            "kklmkmklmkmlkmkmlmk",
            "kklllllllllllllllmk",
            "kklmmmmlmmmlmmmmlmk",
            "kklmkkklmkmlkkkmlmk",
            "kklmmmmlmmmlmmmmlmk",
            "kklllllllllllllllmk",
            "kklmkmllmkmllmkmlmk",
            "kklmkmmlmkmlmmkmlmk",
            "kklmkkklmkmlkkkmlmk",
            "kkkmmmmlmmmlmmmmlmk",
            "kkkklllllllllllllmk",
            "kkkkkkkkkkkkkllllkk",
            " kkkkkkkkkkkkkkkkk",
        ],
        [
            "      kkaaaaakk",
            "       kkaaakk",
            "        kkakk",
            "         kkk",
        ],
        [
            "",
            "",
            "",
            "",
            "",
            "",
            "                  k",
            "                 kk",
            "                kka",
            "               kkaa",
            "               kaaa",
            "               kkaa",
            "                kka",
            "                 kk",
            "                  k",
        ],
        [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "         kkk",
            "        kkakk",
            "       kkaaakk",
            "      kkaaaaakk",
        ],
        [
            "",
            "",
            "",
            "",
            "",
            "",
            "k",
            "kk",
            "akk",
            "aakk",
            "aaak",
            "aakk",
            "akk",
            "kk",
            "k",
        ],
    ]; 


    const W = 19, H = 19;
    
    //bake me a cake as fast as you can >:)
    function bake(rows) {
        const oc = document.createElement('canvas');
        oc.width = W; oc.height = H;
        const ox = oc.getContext('2d');
        const img = ox.createImageData(W, H);
        const d = img.data;
        for (let y = 0; y < rows.length && y < H; y++) {
            const row = rows[y];
            for (let x = 0; x < row.length && x < W; x++) {
                const p = PAL[row[x]];
                if (!p) continue;
                const i = (y * W + x) * 4;
                d[i]=p[0]; 
                d[i+1]=p[1]; 
                d[i+2]=p[2]; 
                d[i+3]=p[3];
            }
        }
        ox.putImageData(img, 0, 0);
        return oc;
    }

    //bake all 20 layers up-front
    const C = GFX.map(bake);

    return {
        /**
         * Draw a pixel-art tile and its active side indicators.
         * Replaces all vertex-art drawing in the actual tile draw thingy
         */
        draw(ctx, colorIndex, sides, cx, cy, size, opacity, scale, isDragging, grayed = false) {
            const base = colorIndex * 5;
            ctx.save();
            ctx.globalAlpha = opacity;
            ctx.translate(cx, cy);
            ctx.scale(scale, scale);
            ctx.imageSmoothingEnabled = false;

            const dx = -size / 2, dy = -size / 2;
            const px = size / W;
            ctx.drawImage(C[base], dx, dy, size, size);
            // graying
            if (grayed) {
                ctx.fillStyle = "#7f7f7f44";
                ctx.fillRect(dx, dy, size, size)
            }
            if (sides.up) ctx.drawImage(C[base + 1], dx - px, dy, size, size);
            if (sides.right) ctx.drawImage(C[base + 2], dx, dy - px, size, size);
            if (sides.down) ctx.drawImage(C[base + 3], dx - px, dy, size, size);
            if (sides.left) ctx.drawImage(C[base + 4], dx, dy - px, size, size);
            

            //drag highlight
            if (isDragging) {
                ctx.strokeStyle = 'rgba(255, 255, 180, 0.9)';
                ctx.lineWidth = 2;
                ctx.strokeRect(dx + 1, dy + 1, size - 2, size - 2);
            }

            ctx.restore();
            ctx.globalAlpha = 1;
        }
    };
})();

const MenuScreen = (() => {
    function toCSS([r, g, b, a]) {
        return `rgba(${r},${g},${b},${(a / 255).toFixed(3)})`;
    }
    
    function bakeSprite(drawing, palette) {
        const cols = drawing[0].length;
        const rows = drawing.length;
        const oc = document.createElement("canvas");
        oc.width = cols;
        oc.height= rows;
        const ox = oc.getContext("2d");
        const img = ox.createImageData(cols, rows);
        const d = img.data;

        for (let r = 0; r < rows; r++) {
            const row = drawing[r];
            for (let c = 0; c < cols; c++) {
                const ch  = row[c];
                const pal = palette[ch];
                if (!pal) continue;            
                const idx = (r * cols + c) * 4;
                d[idx] = pal[0];
                d[idx + 1] = pal[1];
                d[idx + 2] = pal[2];
                d[idx + 3] = pal[3];
            }
        }
        ox.putImageData(img, 0, 0);
        return oc;
    }

    
    
    
    const Background = {
        palette: {
            " ": [255, 0, 0, 0],
            "a": [0, 0, 0,255],
            "b": [16,18, 33,255],
            "c": [31, 35, 59,255],
            "d": [48, 53,87, 255],
            "e": [161, 161, 161,255],
            "f": [56, 56, 56, 255],
            "g": [60, 65,110,255],
            "h": [183, 184, 204,255],
            "i": [73, 73, 84, 255],
            "j": [105,111, 125,255],
            "k": [61, 8, 11, 255],
            "l": [148,18, 27, 255],
            "m": [20, 71, 10, 255],
            "n": [33, 125, 15, 255],
            "o": [9, 19,71,255],
            "p": [16, 31,  110, 255],
        },
        data: [
            "aabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccdddddcccccccccccccccdddccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            "aabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccddccccccccccccccccccccddccccccccccbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaa",
            "aabbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbccccccccddccccccccddddddddcccccccddccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeffaa",
            "aabbbbbbbbbbbcbbbbbbbgbbbbbbbbbbbbbbbbccccdcccddcccccccddddddddddddcccccddccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeffff",
            "aabbbbbgbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccddcccddcccccddddddddddddddddccccddccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeffff",
            "aabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccdccccdcccccddddgggggggggdddddcccdddcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeffff",
            "aabbbbbbbbbbbbbbbbbbbbcbbbbbbbbbcbbbbbccddcccddcccddddgggghhhhhggggddddcccddcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbgbbcbeeeeeeeeffff",
            "aabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccddcccddcccdddgggghhhhhhhhgggddddccddcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeffff",
            "aabbbbbffebbbbbbbbbbbbbbbbbbbbbbbbbbbcccdccccdccccdddggghhhhhhheehggddddcccddcccccccbbbbbbbbbbgbbbbbbbbbbbbbbbbbbbbbeeeeeeeeffff",
            "aabbbffffeiiebbbbcbbbbbbbbbbbbbbbbbbbccddcccddcccdddgghhhhhhhhhhehhggdddcccddcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeffff",
            "abbbfffieiieebbbbbbbbbbbbbbbcbbbbbbbbccddcccddcccdddgghheheeehehhhhggdddcccdddcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeffff",
            "abbffffeeeieeeebbbbbbbbbbbbbbbbbbbbbbccddcccddcccdddghheeeeeeehhhhhhgdddccccddcccccccbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbeeeeeiifffff",
            "abbffffeeeeeeeeeeebbbbbbbgbbbbbbbbbbcccdccccdddccdddgheheeeeeeehhhehggdddcccddccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeiiiiiffff",
            "abbffffeeeeeeeeeeeeebbbbbbbbbbbbbbbbcccdccccdddccdddgheeeeheeeehhhehggdddcccddccccccccbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbiiiieeefffff",
            "abbffffeeeeeeeeeeeeeeeibbbbbbbbbbbbbcccdccccdddccdddgeeehhhheehhhhhhggdddcccddcccdccccbbbbbbbbbbbbgbbbbbbbbbbbbbbbbbeeeieeefffff",
            "abbffffffeeeeeeeeeeeeeieebbbbbbbbbbbccccccccdddccdddgeeehhhhhhehhhhhgddddcccddccccdcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeieeefffff",
            "abbbffeeiffieeeeeeeeeeeeeebbbbbbbbbbccccdccccddccdddgdhhhhhhhhhhhhhggddddcccddcccddcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeieeefffff",
            "abbbffeeeiiifieeeeeeeeeeeeebbbbbbbbbcccddccccddcccdddghhhheehhhhhhhggddddcccdcccdddcccbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbeeeieeefffff",
            "abbfffeeeeeefffieeeeeeeeeeebbbcbbbbbcccddcccccdcccdddgghheeeeeeehhggddddcccddcccdcccccbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbeeeieeefffff",
            "abbfffeeeeeefffffeeeeeeeeeebbcbbbbbbcccddcccccddcccddddghhhheeehhggdddddcccddcccdccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeieeefffff",
            "abffffeeeeeebbfffffiieeeeeebbcbbbbbbccccddcccccddccdddddgggghhhgggdddddccccdccccdccccbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbeeeieeefffff",
            "abffffeeeeeebbbbfffffffeeeebbbcbbbbcbcccdddccccdddccddddddgggggggdddddccccdccccccccccbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbeeeeeeefffff",
            "abffffeeeeeebbbbbbbfiiiffeebbbcbbbbbbcccccdccccccdcccddddddddddddddddccccddccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeefffff",
            "abffffeeeeeebbbbbbffieeiiffbbbcbbbbbbbccccdcccccccddccdddddddddddddddccccdccccdcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeefffff",
            "abffffieeeeebbbcbbffieeeebbbbbbcbbbbbbcccccccccccccddcccdddddddddddccccdddcccdccccccbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeefffff",
            "abffffeeeeeebbbbbbffieeeebbbbbbcbbcbbbbcccccccccccccdddccccccccccccccddddcccddcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeefffff",
            "abffffeeeeeebbbbbbffieeeebbbbbbbbbbbbbbbccccccddccccccddcccccccccccddddcccccdcccccbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbeeeeeeefffff",
            "abffffeeeeeebbbgbbffieeeebbcbbbbbfibbbbbccccccdddcccccccccccccccddddcccccccddccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeefffff",
            "abffffeeeeeebcbbbbffieeeebbcbbbfffeeebbbbbcccccdddcccccccccddddddcccccccccddccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbieeeiiffffff",
            "abffffeeeeeebbbbbbffieeeebbbcbbfffeeeeiieeccccccddccccccccccddddccccccccccdcccccbbbbbbcbbbbbbbbbiiiiibbbbbbbbbbbbbbbiiiiieefffff",
            "abffffeeeeeebbbbbbffiieeebbbcbbfffeeeeieeeeeeccccdddcccccccccccccccccccccdcccccbbbbbbbbbbbbbbbiiiiiiifbbbbbbbbbbbbbbeeeieeefffff",
            "abbfffiiieeebbbbbfffiieeebbbbbbfffeeeeieeeeeeeecccddddccccccccccccccdcccdccccccbbbbbbbbbiiiiffiiiiiiiffbbbbbbbccbbbbeeeieeefffff",
            "abbfffeeiiibbbabbfffiieeebbbbbcfffeeeeiieeeeeeeeeedddddddccccccccdddccccccccccbbbbbbbeiiiiiiiiiiiiiiiffbbbbbbcbbbbbbeeeieeefffff",
            "abbfffeeeeebbbabafffieeeibbbbbcffffeeeiieeeeeeeeeeeccdddddddccccdcccccccccccebbbeeibieiiiiiiiiiiiiiiiffbbbbbcbbbbbbbeeeieeefffff",
            "bbffffeeeeeebbaaafffieeeibbbbbccffiiiffieeeeeeeeeeeccccccccccccccccccccccccceeeeeeiieeiiiiiiiiiiiiiiiffbbbbcbbbbbbcbeeeieeffffff",
            "bffffeeeeeebbabbffffiiibbabbbbcffeeebffffieeeeeeeebcccccccccccccccccccccccbbeeeeeeeeeeiiiiiiiiiiiffifffbbbcbbbbbccbbeeiiiiifffff",
            "bffffeeeeeebbabbfffieeiaaaabbbcffeeebbbfffffeeeeeebbcccccccccccccccccccccbbeeeeeeeeiiiiiiiiifffffieiffbbccbbbbbcbbbbiiiieeifffff",
            "bffffeeeeeebbabbfffieeeaaaabbbbffeeebbbbbbbfffffeebbbbcccccccccccccccbbbbbbeeeeeeeeiiiiiffffffbbbieifbbbbbbbbbbcbbbbeeeieeifffff",
            "bffffeeeeeebbaaafffieeeabaaaaabffeeebbbbbbbbbfiiibbbbbbbbbccccccbbbbbbbbbbbeeeeeiiiifffffffbbbbbbieiffbbbbbbcccbbbbeeeeeeeffffff",
            "bffffeeeeeebbabbfffieeeabaabaabffieeccabbbdbffiiebbbbbbbbbbbbbbbbccbbbbbbbbbeeeefffffffbbbbbbbbbbeeiffbbbbbbbbbbbbceeeeeeeffffff",
            "bfffieeeeeebbabbfffieeeabaaaabbffiiiacaabbbbffiiebbbbbbbbbbbbbbbbbbbbbbbbbbbifffffffbbbbbbbbbbbbbeeiffbbbbbbbbbbccceeeeeeeffffff",
            "bfffieeeeeebbaaafffffiaaaabaabffieiiaaaaabbbffiiebbbbbbbbbbbbbbbbcbbbbbbbbbeeiifbbbbbbbbbbbbbbbbbeiiffbbbbbbbbcccddeeeeeeeffffff",
            "bbffieeeeebbbabbfffieeabbabaabffieeeacbaabbaffiiecbbbbbbbbbbbgbbbbbbbbbbbbbeeiiffbbbbbbbbbbbbbbbbieiffbbbbbbccccdddeeeeeeeffffff",
            "bbffieeeeabbbabbfffieeabbabaabffieeeabbabaaafffieccccbbbbbbbbbbbbbbbbbbbbbbeeiiffbbbbbbbbbbbbbbbbeeiffbbbbbccccddddeeeeeeeffffff",
            "bbfffiiiiabbbabbfffieeaaaabaaaffieeeabcabbacfffieccccccccbbbbbbbbbcccccbbbbeeiiffbbbbbbbbbbcbbbbbeeiffbbbbcccddddddeeeeeeeffffff",
            "bbffieeeebaababbfffieeabaabaaaffieeeabcabcacfffiedddcccccccccccccbbbbbccbbbeeiiffbbbbbbbbbbbbbbbbeeiffbbcccdddddddceeeeeeeffffff",
            "bbffieeeeeaaaaaafffieeaababaaaffieeeaaaaccacfffieddddddccccccccccccccccccbbieeiffbbbbbbbbbbbbbbbbeeiffccccdddddddcceeeeeeeffffff",
            "bfffieeeeeaaaaaafffieeaababaaaffieeeaaaaaaacfffiedddddddddccccccccccccccccceiifffbbbbbbbbbbbbbbbbeeiffcccdddddddccbffeeeeeffffff",
            "bfffiieeeeaaaaaafffieeaababaaaffieeeaaaaccacfffieddddddddddddddcccccccccccceeeifbbbbbbbbbbbbbbccceefffccdddddddccbhhhfieeeffffff",
            "bffffieeeeaaaaaafffieeaaaaaaaaffieeeaaaaacacffffiddddddddddddddddddddddddddeeeiffbbbbbbbbbbcccccdeeiffddddddddccbbhhhffiifffffff",
            "bffffiieeeaaaaaafffieeaaaaaaaaffieeeaababaaafffieccddddddddddddddddddddddddeeiiffcccccccccccccdddeeiffdddddddccbbhhhhffieeffffff",
            "bffffiieeeaaaaaafffieeaaaaaaaaffieeeaababbabfffiecccdddfiedddddddddddddddddeeiifdccccddddddddddddeeiffdddddcccbbbhhhffiieeffffff",
            "bffffiieeiaaaaaafffieeaaaaaaaafffiiiaaaabbabfffieccccddfiedddddddddddddddddeeeifdddddddddddddddddeeiffddddccbbbbbhhhffiieeffffff",
            "bffffiieeiaababafffieeabaaaaaaffeeeeaaaaaaabfffiebcccccfiecdddddddddddddccceeeifdddddddddddddddddieiffdddccbbbbbhhhfffeeeeffffff",
            "bbfffiieeiaababafffieeababaaaaffeieeaaaaaaaafffiebbbcccfiecccccddcccccccccceeeifdddddddadddddddddieiffdcccbbbbbbhhhffieeeeffffff",
            "bbffiiieeiaaaaaafffieeababaaaaffeieeaaaaaaaafffiebbbbbcfiicccccccccccccccccieiifccdddddadcdccccccieiffccbbbbbbbbhhhffieeeeffffff",
            "bbffiiiieeaababafffiieababaaaaffeiieaaaaaaaafffiebbbbbbfiebbcccccccccccccbbeifffcccccccacccccccccieiffbbbbbbbbbhhhfffeeeeeffffff",
            "bfffiiiieeaababafffiieababaaaaffiiieaaaaaaaafffieababbbfiebbbbbbbbbbbbbbbbbeeiifcccbbbabbbbbcccccieiffbbbbdbbbbhhhffeeeeeeffffff",
            "bfffiiiieeaaaabaffffiiababaaaaffiiieababaaaafffieaaabbbfiebbbbbbbbbbbbbbbbbeeiifbbbbbbaaabbbbbbbbeeiffbbgbbbbbhhhfffeeeeeeffffff",
            "ffffiiieeaaaaaafffiieababbaaaaffiiieababaabaffffeaaabbbfiebbbbbbbbbbgbdbbbbeeiifbbbifabbabbbbbbbbeeiffbbbbbbbbhhhffieeeeeeffffff",
            "ffffiiiieaaaaaafffieeababaaaaffiiiiababaabafffieababbbfiibbbbbbbbbbbbbbbbbeeiifbbiiffbbabbbbbbbbbeeiffbbbbbbbhhhhffieeeeeefffffa",
            "fffiiiiiiabaabafffieeaaaaaaaafffiiiababaabafffieabaaabfiebbbgbbiifbbbbbbbbeiiifbbiiffbbabbbbbabaeeiffbbbbbbbbhhhfffieeeeeefffffa",
            "fffiiiiiiabaabafffieeababaaaaffiiiiaaaaaabafffieabababfiebbbbbbiiffibbbbbbeiiifbbiiffbbaaaaaaaaaeeiffbbbbbbahhhffieeeeeeeffffffa",
            "fffiiiieeabaabafffieeababaaaaffiiiiabaaaaaafffieababbbfiebbbbbbiiffiibiifbeiiifbbiiffbbabbbbabbaeeiffbbbbbahhhhffieeeeeeefffffaa",
            "fffiiiiiiibafeafffiieababaaaaffiiiiabafeaaafffieababbbfiebbbdbbiifffifiifbiiiifbbiiffbbabbbbabbaeiiffbbbbbahhhfffieeeeeeefffffaa",
            "fffiiiiiiiaafeefffiieababaaaeffffiiabaiefaafffieaahbbbfiebbbbbbiifbbbbiifbeeiffbbiiffbbabdbbabbaeeiffbbbbahhhhffiieeeeeeefffffaa",
            "fffiiiiiiiaafeefffiieababaaaeefiiiiaaieifaafffieahhbbbfiibbbbbbiifbbbbiifbeeeifbbiiffababbbbabbaeiiffbbbaahhhfffieeeeeeeefffffaa",
            "fffiiiiiiiaafeefffiieaaaaaaieifiiiiaaiefaaafffiiaffaabfiebbbbbbiifbbbbiifbiiiifbbiiffaaabaababbaiiiffbaaaaffffffieeeeeeeefffffaa",
            "fffiiiiiiiaafeefffiiiaaaaafieifiiiiafeifeaafffiiaffaaafiibbabbaiifabaaiifbiiiifabiiffaaaaahaabbaiiiffaaaaeeeeffiieeeeeeeefffffaa",
            "fffiiiiiiiaafeefffiiiaaaaffeiffiiiiafeifieafffiiaafiaafiiababaaiifaaaaiifbiiiifaaiiffaaaahhfaaaaiiiffaaaaeeefffiieeeeeeiefffffaa",
            "fffiiiiiiifafeifffiiiaffffeeiefiiiifiiffiiafffiiaaffaafiiaaaaaaiifaaeffifbiiiifaaiiffaaaahiffaaaiiiffaaaeeeeffieieeeeeeiefffffaa",
            "iifiiiiiiifefeifffiihafeffieieffffffifeefiifffiiaaaffafiiaaaaaaiifaeiffifbiiiifaaiiffeiahhiffaaaiiiffaaaeeefffieeeeeeeeiefffffaa",
            "fffffffffffefifffffhhhfiefiiiffeeeefifefffiffeeeeiaffffiifaffaififeifeeffbiiiffaaiifeeiahhffafaaiiiffaaeeeefffieeeeeeeeiefffffaa",
            "fffeeeeeeeeieffiifffhhhfieifeffiiiiffffeiffifiiiiiffeeffeffffiifffiifiififffifffaifefffihfffafaaiiiffaaeeefffiieeeeeeeeiifffffaa",
            "iifffiiiiiiiieffffffhhhfiiefefffffffiefiififeeffieefiiiefeiiifffiieeefffffeefffaafiifffiiffffffafffffafieefffiiieeeieeeiiffffaaa",
            "iieeeeifiiiffifffffffhhhfiefffeeiiiieeeffiifiifefiefffiifffiiiiiifiiffifiiiieiffaafffefhhhhhfiffeeeifafiiifffeeieiiieeiiiffffaaa",
            "ffiiiiifiiffeefffffffhhhhffjjfffieeffffffffffffffffiieeeeiiiieeiiiffifieeifiiiffiifeffhhhhhfffifiiiiffiiifffieeiiiiiieiifffaafaa",
            "ffffffffiffiiiifffffffhhhfefjjjjfffiiiiiiijjjjjjjjjjiiiiifjjjiiiiiiiffffffffeeeeifffffhhhhfffffeeiifffiiifffieiiiiiiiiiiaafaaaaa",
            "iiiffffffifiifeeffffffhffkkkkkkkjjjjjjjjjjjeejjjjjjjiiiiifjjjkkkkkkjjjjiiiijfffffffffhhhhhfffffffiiifiiiiffiiiiiiiiiiiiiiaaaaaaa",
            "fffiiffffffifiiffffffffjjjkllfflkfefjjjjfjjjjjjjjjjjffffffjjjjkllllkjjjjjjjjjjjjiiiifhhhhfffffffffifiiiifffiiiiiifiiiiiiiaaaaaaa",
            "ffefffffffffffffffffjjjjjjklfeefkeiffjfefjjjjjfeeefjjjjjjjjjjjjkkkkkkeeejjjfjjeejjjfhhhhhffffffffffffiiifffiiiiiifiiiiiiaaaaaaaa",
            "fffeffjjiijjjjjjjjjjjjjjjjfeeefkkffefiifjjjjjfiiifjjjjjjjjjjeejjjjjjjjjjfeejjjjjjifhhhhffffffffffffiiifffiiaiiifffiiiiiiaaaaaaa",
            "fffeffjjjjjjjfeeeeeeeeeeeejfffffjjjffffffffjjjfffffjjjjjjeeeejjjjjjjjjjjjjfffjjjjjjjfffifffffffffffiiiifffiaaffffaaaiiiiiaaaaaaa",
            "ffiiijjjjjjjeeeeeeeeeeeeeefjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjhhhjjjjjjjjfiijjjjjjjiffffffhhhhhffiiiffaaaaaafaaaaaiiiiaaaaaaa",
            "fhfeefjeeiiffffffffffffffhfjjfefjjjjjjjmmmmmmmjjjjjjjjjjjjjjjjjjhhhffjjjjjjjjjjjjjjjjjjjjjfhhhhhifhfiifffaaaaaaaaaaaaiiiaaaaaaa",
            "jifiifjfjjjffffffffffffffhfjifffijjjjjmmnnnnmjjjjffjjfeefjjjjjfihffffjiiiijjjjjjjjjjjjjjjhiiiiiifffifffffaaaafaaaaaaaffaaaaaaaa",
            "jjfffjjjffjffffffffffffffhfjjjjjjjjjjmmmmnnmjjjjjjjfffiifjjjjjfifffffjjjjiiejfffjoooooojjjffffffffiifiifffaaffaaaaaaaaaaaaaaaaaa",
            "ffjjjjjjfjjffffffffffffffffjjjjjjjjjmmmmmmmjjjjjjjjjjffffjjjjjjfffffffjjjjiiejjjjjoppppojjffffffffififfiiifaaaaaaaaaaaaaaaaaaaaa",
            "ffjjjjffffffffffffffffffffjjjjjjjjjeeejjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjiijjjjjjoppppojjjjjfhhffffiifffffaaaaaaaaaaaaaaaaaaaa",
            "jjjjfffhhhhhffffffffffffffjjjjjfffjjjjjjjjjjjjjjjjjjjjjjjjjjfeeeeefjjjjjjjjjeeeejjjjoooooofhhfhiififfffiifffffaaaaaaaaaaaaaaaaaa",
            "fffffffffhhhhffffffffffjjjjejjfffffjjjjjjjiiiiijjjjjjjjjjjjjfiiiiifjjjjjjjjjiiiiiijjjfjjjjfiiffffffffffffffffffaaaaaaaaaaaaaaaaa",
            "ffffffffffhhhhhffjjjjjjjjjjffffffffjjjjjjfiifjjjjjjjjjjjjjjjffffffjjjjjjjjjjjjjjjjjfffjjjjfffffhhfjfhhfffffffffaaaaaaaaaaaaaaaa",
            "fffffffffffhhhhhfjjjjjjfffffffffffffjjjjjffffjjjjeejjjjjjjjjjjjjjjjjjjjjjjjiiiijjjjfffffjjjjjjjjffjjjfffffffffffaaaaaaaaaaaaaaaa",
            "aaffffffffffhhhhhfjjjjfeefffffffffffjjjiiffffjjeejjeeejjjjjjjjjjjjjjjjjjjjjjjjjjjjfffffffjjjjjjjjjjjjjjjahhffffaaaaaaaaaaaaaaaaa",
            "aaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffjjjjjjjjjjjjjjjjjeeeeeeejjjjjjjjeeeeeejjjjjjjffffffffjjjjjjjiihjjjaaaahaaaaaaaaaaaaaaaaaaaa",
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaajjjjjjjjjjjjjjjjjjffffffeeeeeeffffffffffiifffffffhfaaaaaaaaaaaaaaaaaaaaaaaaaa",
        ],
    };

    const Title = {
        palette: {
            " ": [255,0,0,0],
            "a": [61,8,11,255],
            "b": [20,71,10,255],
            "c": [9,19,71,255],
            "d": [148,18,27,255],
            "e": [33,125,15,255],
            "f": [16,31,110,255],
        },
        data: [
            "aaaaaaaaa bbbbbbbbb ccccccccc aaaaaaaaa bbbbbbbbb ccccccccc aaaaaaaaa",
            "addddddda beeeeeeeb cfffffffc addddddda beeeeeeeb cfffffffc addddddda",
            "adaadaada bbebbbbeb cfcccccfc adaaaaada bbebbbbeb cfcccccfc adaaaaada",
            "addadadda  beb  bbb cfc cfcfc ada adada  beb  bbb cfc   cfc ada   ada",
            "aaaadaaaa  beb      cfc cfffc ada addda  beb      cfcc  cfc adaa  ada",
            "   ada     beb      cfc ccccc adaaaaaaa  beb      cfcccccfc adaaaaada",
            "   ada     bebbbb   cfccccccc addaaaaa   bebbbb   cfffffffc addddddda",
            "   ada     beeeeb   cfffffffc aadddddaa  beeeeb   cfcfffccc adaaaaada",
            "   ada     bebbbb   cccccccfc  aaaaadda  bebbbb   cfcccffc  ada   ada",
            "   ada     beb      ccccc cfc aaaaaaada  beb      cfcccffc  ada   ada",
            "   ada     beb      cfffc cfc addda ada  beb      cfc ccfc  ada   ada",
            "   ada     beb  bbb cfcfc cfc adada ada  beb  bbb cfc  cfc  ada   ada",
            "  aadaa   bbebbbbeb cfcccccfc adaaaaada bbebbbbeb cfcc cfcc adaa aada",
            "  addda   beeeeeeeb cfffffffc addddddda beeeeeeeb cffc cffc adda adda",
            "  aaaaa   bbbbbbbbb ccccccccc aaaaaaaaa bbbbbbbbb cccc cccc aaaa aaaa",
        ],
    };

    
    
    
    let bgSprite = null;   
    let titleSprite = null;   
    let ready = false;

    
    let _clicked = false;

    
    const stars = [];

    function initStars(count = 80) {
        for (let i = 0; i < count; i++) {
            stars.push({
                x: Math.random(),        
                y: Math.random(),
                r: 0.4 + Math.random() * 1.4,
                speed: 0.00008 + Math.random() * 0.00018,
                phase: Math.random() * Math.PI * 2,
                opacity: 0.3 + Math.random() * 0.7,
            });
        }
    }

    
    
    
    return {
        
        init() {
            bgSprite  = bakeSprite(Background.data, Background.palette);
            titleSprite = bakeSprite(Title.data, Title.palette);
            initStars();
            ready = true;

            
            const onInput = () => { _clicked = true; };
            window.addEventListener("mousedown", onInput, { once: true });
            window.addEventListener("touchstart", onInput, { once: true });
        },

        
        onClick() { return _clicked; },

        
        draw(ctx, w, h, t) {
            if (!ready) return;

            ctx.fillStyle = "rgb(5, 5, 20)";
            ctx.fillRect(0, 0, w, h);

            
            for (const s of stars) {
                const pulse = 0.5 + 0.5 * Math.sin(t * 1.8 + s.phase);
                ctx.save();
                ctx.globalAlpha = s.opacity * (0.5 + 0.5 * pulse);
                ctx.fillStyle   = "#d8e8ff";
                ctx.beginPath();
                ctx.arc(s.x * w, s.y * h, s.r, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }

            
            const bgW  = Math.round(w * 0.95);
            const bgH  = Math.round(bgW * (bgSprite.height / bgSprite.width));
            const bgX  = Math.round((w - bgW) / 2);
            const bgY  = Math.round((h - bgH) / 2);

            ctx.save();
            ctx.imageSmoothingEnabled = false;
            ctx.drawImage(bgSprite, bgX, bgY, bgW, bgH);
            ctx.restore();

            
            const vig = ctx.createRadialGradient(w/2, h/2, h*0.15, w/2, h/2, h*0.75);
            vig.addColorStop(0, "rgba(0,0,0,0)");
            vig.addColorStop(1, "rgba(0,0,0,0.65)");
            ctx.fillStyle = vig;
            ctx.fillRect(0, 0, w, h);

            
            const titleW = Math.round(w * 0.42);
            const titleH = Math.round(titleW * (titleSprite.height / titleSprite.width));
            const titleX = Math.round((w - titleW) / 2);
            
            const floatY = Math.round(h * 0.06 + Math.sin(t * 0.9) * 4);
            const titleY = Math.round(h * 0.12 + floatY);

            
            ctx.save();
            ctx.imageSmoothingEnabled = false;
            ctx.shadowColor = "rgba(0,0,0,0.85)";
            ctx.shadowBlur = 18;
            ctx.shadowOffsetY = 6;
            ctx.drawImage(titleSprite, titleX, titleY, titleW, titleH);
            ctx.restore();


        },

        t: 0,
    };
})();