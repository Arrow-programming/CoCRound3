
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
        draw(ctx, colorIndex, sides, cx, cy, size, opacity, scale, isDragging) {
            const base = colorIndex * 5;
            ctx.save();
            ctx.globalAlpha = opacity;
            ctx.translate(cx, cy);
            ctx.scale(scale, scale);
            ctx.imageSmoothingEnabled = false;

            const dx = -size / 2, dy = -size / 2;
            const px = size / W;
            ctx.drawImage(C[base], dx, dy, size, size);
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