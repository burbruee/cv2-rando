const { enemy, fixture, npc } = require('./object');

module.exports = [
    {
        name: 'Jova',
        objset: 0,
        area: 0,
        submap: 0,
        pattern: {
            bg: 0,
            sprite: 0x01,
            pointer: 0x1CCF9
        },
        actors: [
            npc.shepherd(0x04, 0x0C, 0x38, 0x50BC),
            npc.shepherd(0x04, 0x1A, 0x3D, 0x50C0),
            npc.shepherd(0x08, 0x12, 0x3E, 0x50C4),
            fixture.sign(0x0C, 0x1A, 0x3A, 0x50C8),
            enemy.zombie(0x0C, 0x0C, 0x01, 0x50CC),
            npc.shepherd(0x14, 0x1A, 0x41, 0x50D0),
            enemy.zombie(0x14, 0x14, 0x01, 0x50D4),
            npc.man(0x18, 0x14, 0x44, 0x50D8),
            enemy.zombie(0x18, 0x0C, 0x01, 0x50DC),
            enemy.zombie(0x1C, 0x1A, 0x01, 0x50E0),
            npc.shepherd(0x24, 0x0C, 0x4C, 0x50E4),
            npc.man(0x28, 0x14, 0x4D, 0x50E8),
            npc.man(0x2C, 0x1A, 0x4E, 0x50EC),
            enemy.zombie(0x28, 0x14, 0x01, 0x50F0),
            enemy.zombie(0x2C, 0x0C, 0x01, 0x50F4),
            npc.merchant(0x34, 0x12, 0x07, 0x50F8),
            enemy.zombie(0x34, 0x12, 0x01, 0x50FC),
            enemy.zombie(0x38, 0x0C, 0x01, 0x5100)
        ]
    },
    {
        name: 'Veros',
        objset: 0,
        area: 0x01,
        submap: 0,
        actors: [
            npc.man(0x04, 0x0C, 0x40, 0x522A),
            enemy.bat(0x04, 0x08, 0x02, 0x522E),
            npc.man(0x0C, 0x0C, 0x43, 0x5232),
            fixture.sign(0x0D, 0x0C, 0x3B, 0x5036),
            npc.man(0x14, 0x0C, 0x48, 0x523A),
            npc.woman(0x1A, 0x0C, 0x4F, 0x523E),
            enemy.zombie(0x18, 0x0C, 0x02, 0x5242),
            npc.shepherd(0x1C, 0x0C, 0x50, 0x5246),
            npc.shepherd(0x24, 0x0C, 0x39, 0x524A),
            enemy.zombie(0x28, 0x0C, 0x02, 0x524E),
            enemy.zombie(0x2C, 0x0C, 0x02, 0x5252),
            enemy.zombie(0x34, 0x08, 0x02, 0x5256),
            enemy.bat(0x34, 0x0C, 0x02, 0x525A)
        ]
    },
    {
        name: 'Aljiba',
        objset: 0,
        area: 0x02,
        submap: 0,
        actors: [
            npc.crystalDude(0x08, 0x0C, 0x03, 0x517C),
            enemy.zombie(0x08, 0x0C, 0x02, 0x5180),
            npc.man(0x0C, 0x0C, 0x57, 0x5184),
            fixture.sign(0x0C, 0x1A, 0x51, 0x5188),
            enemy.zombie(0x14, 0x0C, 0x02, 0x518C),
            npc.woman(0x18, 0x0C, 0x58, 0x5190),
            npc.shepherd(0x1C, 0x0C, 0x5B, 0x5194),
            enemy.zombie(0x24, 0x1A, 0x05, 0x5198),
            npc.man(0x28, 0x1A, 0x60, 0x519C),
            enemy.zombie(0x2C, 0x0C, 0x02, 0x51A0),
            npc.shepherd(0x34, 0x0C, 0x69, 0x51A4),
            npc.man(0x34, 0x12, 0x67, 0x51A8),
            enemy.zombie(0x38, 0x0C, 0x02, 0x51AC)
        ]
    },
    {
        name: 'Alba',
        objset: 0,
        area: 0x03,
        submap: 0,
        actors: [
            npc.woman(0x08, 0x0C, 0x5F, 0x5105),
            npc.woman(0x08, 0x1A, 0x61, 0x5109),
            npc.woman(0x0C, 0x20, 0x62, 0x510D),
            fixture.sign(0x0C, 0x28, 0x52, 0x5111),
            enemy.zombie(0x0C, 0x0C, 0x04, 0x5115),
            npc.woman(0x14, 0x0C, 0x63, 0x5119),
            enemy.zombie(0x14, 0x0C, 0x04, 0x511D),
            enemy.zombie(0x14, 0x1A, 0x04, 0x5121),
            npc.woman(0x18, 0x1A, 0x66, 0x5125),
            enemy.zombie(0x1C, 0x28, 0x04, 0x5129),
            npc.woman(0x24, 0x0C, 0x5D, 0x512D),
            enemy.zombie(0x28, 0x1A, 0x04, 0x5131),
            npc.crystalDude(0x2C, 0x22, 0x04, 0x5135),
            enemy.zombie(0x2C, 0x0C, 0x04, 0x5139),
            enemy.zombie(0x2C, 0x22, 0x04, 0x513D),
            enemy.zombie(0x2C, 0x28, 0x04, 0x5141),
            enemy.zombie(0x34, 0x0C, 0x04, 0x5145),
            npc.woman(0x38, 0x0C, 0x68, 0x5149)
        ]
    },
    {
        name: 'Ondol',
        objset: 0,
        area: 0x04,
        submap: 0,
        actors: [
            npc.shepherd(0x08, 0x0C, 0x3F, 0x525F),
            fixture.sign(0x0C, 0x28, 0x3C, 0x5263),
            enemy.zombie(0x0C, 0x0C, 0x04, 0x5267),
            npc.man(0x14, 0x0C, 0x45, 0x526B),
            npc.man(0x14, 0x1A, 0x46, 0x526F),
            enemy.zombie(0x18, 0x0C, 0x04, 0x5273),
            enemy.zombie(0x18, 0x18, 0x04, 0x5277),
            enemy.zombie(0x1C, 0x28, 0x04, 0x527B),
            enemy.zombie(0x24, 0x0C, 0x04, 0x527F),
            enemy.zombie(0x24, 0x14, 0x04, 0x5283),
            npc.shepherd(0x28, 0x14, 0x47, 0x5287),
            npc.shepherd(0x28, 0x24, 0x4A, 0x528B),
            enemy.zombie(0x2C, 0x1A, 0x04, 0x528F),
            npc.shepherd(0x34, 0x0C, 0x4B, 0x5293),
            enemy.zombie(0x34, 0x12, 0x04, 0x5297),
            enemy.zombie(0x38, 0x0C, 0x04, 0x529B),
            enemy.zombie(0x38, 0x1A, 0x04, 0x529F)
        ]
    },
    {
        name: 'Doina',
        objset: 0,
        area: 0x05,
        submap: 0,
        actors: [
            npc.shepherd(0x04, 0x0C, 0x5E, 0x51B1),
            fixture.sign(0x0C, 0x0C, 0x53, 0x51B5),
            enemy.zombie(0x14, 0x0C, 0x08, 0x51B9),
            npc.shepherd(0x1C, 0x06, 0x65, 0x51BD),
            enemy.zombie(0x1C, 0x0C, 0x08, 0x51C1),
            enemy.zombie(0x24, 0x0C, 0x08, 0x51C5),
            npc.shepherd(0x28, 0x0C, 0x6A, 0x51C9),
            enemy.zombie(0x2C, 0x0C, 0x08, 0x51CD),
            enemy.zombie(0x34, 0x0C, 0x08, 0x51D1)
        ]
    },
    {
        name: 'Yomi',
        objset: 0,
        area: 0x06,
        submap: 0,
        actors: [
            fixture.sign(0x0C, 0x0C, 0x54, 0x51D6),
            enemy.bat(0x14, 0x0C, 0x08, 0x51DA),
            enemy.bat(0x18, 0x06, 0x08, 0x51DE),
            enemy.bat(0x24, 0x0C, 0x08, 0x51E2),
            enemy.bat(0x2C, 0x0C, 0x08, 0x51E6),
            enemy.bat(0x38, 0x0C, 0x08, 0x51EA)
        ]
    },
    {
        name: 'Church',
        objset: 0,
        area: 0x07,
        submap: 0,
        actors: [
            npc.priest(0x08, 0x08, 0x31, 0x4EED)
        ]
    },
    {
        name: 'Jova - Thorn Whip Room',
        objset: 0,
        area: 0x08,
        submap: 0,
        actors: [
            npc.merchant(0x0C, 0x0C, 0x08, 0x514E)
        ]
    },
    {
        name: 'Jova - Holy Water Room',
        objset: 0,
        area: 0x09,
        submap: 0,
        actors: [
            npc.merchant(0x0C, 0x0C, 0x03, 0x5153)
        ]
    },
    {
        name: 'Veros - Empty Room Before Dagger',
        objset: 0,
        area: 0x0A,
        submap: 0
    },
    {
        name: 'Veros - Dagger Room',
        objset: 0,
        area: 0x0A,
        submap: 0x01,
        actors: [
            npc.merchant(0x0C, 0x0C, 0x04, 0x52A5)
        ]
    },
    {
        name: 'Veros - Chain Whip Room',
        objset: 0,
        area: 0x0B,
        submap: 0,
        actors: [
            npc.merchant(0x0A, 0x1A, 0x09, 0x52AA),
            fixture.book(0x0D, 0x17, 0x42, 0x52AE)
        ]
    },
    {
        name: 'Aljiba - Garlic Room',
        objset: 0,
        area: 0x0C,
        submap: 0,
        actors: [
            npc.merchant(0x0C, 0x1A, 0x02, 0x51EF)
        ]
    },
    {
        name: 'Aljiba - Book Room Before Old Lady',
        objset: 0,
        area: 0x0D,
        submap: 0,
        actors: [
            fixture.book(0x03, 0x15, 0x5C, 0x51F4)
        ]
    },
    {
        name: 'Aljiba - Old Lady Room',
        objset: 0,
        area: 0x0D,
        submap: 0x01,
        actors: [
            npc.oldLady(0x0C, 0x1A, 0x59, 0x51F9)
        ]
    },
    {
        name: 'Aljiba - Empty Room Before Laurels',
        objset: 0,
        area: 0x0E,
        submap: 0
    },
    {
        name: 'Aljiba - Laurels Room',
        objset: 0,
        area: 0x0E,
        submap: 0x01,
        actors: [
            npc.merchant(0x0C, 0x1A, 0x00, 0x51FF)
        ]
    },
    {
        name: 'Alba - Empty Room Before Garlic',
        objset: 0,
        area: 0x0F,
        submap: 0
    },
    {
        name: 'Alba - Garlic Room',
        objset: 0,
        area: 0x0F,
        submap: 0x01,
        actors: [
            npc.merchant(0x0C, 0x1A, 0x02, 0x5159)
        ]
    },
    {
        name: 'Alba - Empty Room Before Laurels',
        objset: 0,
        area: 0x10,
        submap: 0
    },
    {
        name: 'Alba - Laurels Room',
        objset: 0,
        area: 0x10,
        submap: 0x01,
        actors: [
            npc.merchant(0x0C, 0x0C, 0x00, 0x515F)
        ]
    },
    {
        name: 'Ondol - Empty Room Before Morning Star',
        objset: 0,
        area: 0x11,
        submap: 0
    },
    {
        name: 'Ondol - Morning Star Room',
        objset: 0,
        area: 0x11,
        submap: 0x01,
        actors: [
            npc.merchant(0x0C, 0x1A, 0x0A, 0x52B4)
        ]
    },
    {
        name: 'Ondol - Death Star Lady Room',
        objset: 0,
        area: 0x12,
        submap: 0,
        actors: [
            npc.oldLady(0x0C, 0x0C, 0x49, 0x52B9)
        ]
    },
    {
        name: 'Ondol - Empty Room',
        objset: 0,
        area: 0x13,
        submap: 0
    },
    {
        name: 'Doina - Get Back Lady Room',
        objset: 0,
        area: 0x14,
        submap: 0,
        actors: [
            npc.oldLady(0x0C, 0x0C, 0x64, 0x5204)
        ]
    },
    {
        name: 'Doina - Laurels Room',
        objset: 0,
        area: 0x15,
        submap: 0,
        actors: [
            npc.merchant(0x0C, 0x1A, 0x00, 0x5209)
        ]
    },
    {
        name: 'Yomi - Empty Room',
        objset: 0,
        area: 0x16,
        submap: 0
    },
    {
        name: 'Yomi - Old Lady Room',
        objset: 0,
        area: 0x17,
        submap: 0,
        actors: [
            npc.oldLady(0x0C, 0x0C, 0x5A, 0x520F)
        ]
    },
    {
        name: 'Laruba Mansion - Door',
        objset: 0x01,
        area: 0,
        submap: 0
    },
    {
        name: 'Berkeley Mansion - Door',
        objset: 0x01,
        area: 0x01,
        submap: 0
    },
    {
        name: 'Rover Mansion - Door',
        objset: 0x01,
        area: 0x02,
        submap: 0
    },
    {
        name: 'Brahm Mansion - Door',
        objset: 0x01,
        area: 0x03,
        submap: 0
    },
    {
        name: 'Bodley Mansion - Door',
        objset: 0x01,
        area: 0x04,
        submap: 0
    },
    {
        name: 'Laruba Mansion - Part 1',
        objset: 0x01,
        area: 0x06,
        submap: 0,
        actors: [
            enemy.skeleton(0x04, 0x04, 0x1E, 0x5A18),
            enemy.skeleton(0x04, 0x0E, 0x1E, 0x5A1C),
            enemy.skeleton(0x08, 0x1A, 0x1E, 0x5A20),
            enemy.skeleton(0x0C, 0x0C, 0x1E, 0x5A24),
            enemy.skeleton(0x0C, 0x1A, 0x1E, 0x5A28),
            enemy.skeleton(0x14, 0x04, 0x1E, 0x5A2C),
            enemy.skeleton(0x14, 0x0C, 0x1E, 0x5A30),
            enemy.spearKnight(0x18, 0x12, 0x1E, 0x5A34),
            enemy.spearKnight(0x18, 0x1A, 0x1E, 0x5A38),
            enemy.skeleton(0x1C, 0x0C, 0x1E, 0x5A3C),
            enemy.boneThrower(0x1C, 0x1A, 0x1E, 0x5A40),
            enemy.skeleton(0x24, 0x08, 0x1E, 0x5A44),
            enemy.spearKnight(0x24, 0x12, 0x1E, 0x5A48),
            enemy.skeleton(0x28, 0x18, 0x1E, 0x5A4C),
            enemy.skeleton(0x2C, 0x08, 0x1E, 0x5A50),
            enemy.boneThrower(0x34, 0x04, 0x1E, 0x5A54),
            enemy.skeleton(0x34, 0x14, 0x1E, 0x5A58),
            enemy.boneThrower(0x38, 0x0E, 0x1E, 0x5A5C),
            enemy.spearKnight(0x3C, 0x14, 0x1E, 0x5A60)
        ]
    },
    {
        name: 'Laruba Mansion - Part 2',
        objset: 0x01,
        area: 0x06,
        submap: 0x01,
        actors: [
            npc.crystalDude(0x02, 0x34, 0x01, 0x5A65),
            enemy.skeleton(0x03, 0x12, 0x1E, 0x5A69),
            enemy.skeleton(0x03, 0x1A, 0x1E, 0x5A6D),
            enemy.skeleton(0x03, 0x22, 0x1E, 0x5A71),
            enemy.skeleton(0x08, 0x0E, 0x1E, 0x5A75),
            enemy.boneThrower(0x08, 0x1E, 0x1E, 0x5A79),
            enemy.skeleton(0x08, 0x28, 0x1E, 0x5A7D),
            // block
            // arrow
            // arrow
            // arrow
            enemy.skeleton(0x14, 0x0C, 0x1E, 0x5A91),
            enemy.spider(0x14, 0x2B, 0x1E, 0x5A95),
            // block
            enemy.spider(0x1C, 0x2B, 0x1E, 0x5A9D),
            npc.merchant(0x1D, 0x0C, 0x06, 0x5AA1),
            enemy.skeleton(0x24, 0x12, 0x1E, 0x5AA5),
            enemy.boneThrower(0x24, 0x26, 0x1E, 0x5AA9),
            enemy.boneThrower(0x28, 0x0C, 0x1E, 0x5AAD),
            enemy.boneThrower(0x28, 0x16, 0x1E, 0x5AB1),
            enemy.spearKnight(0x28, 0x20, 0x1E, 0x5AB5),
            enemy.spearKnight(0x2A, 0x30, 0x1E, 0x5AB9),
            enemy.skeleton(0x2C, 0x12, 0x1E, 0x5ABD),
            enemy.skeleton(0x2C, 0x20, 0x1E, 0x5AC1)
        ]
    },
    {
        name: 'Laruba Mansion - Camilla Fight',
        objset: 0x01,
        area: 0x06,
        submap: 0x02,
        actors: [
            enemy.camilla(0x08, 0x0A, 0xF0, 0x5AC6)
        ]
    },
    {
        name: 'Laruba Mansion - Orb Room',
        objset: 0x01,
        area: 0x06,
        submap: 0x03,
        actors: [
            fixture.orb(0x0D, 0x07, 0x1C, 0x5ACB)
        ]
    },
    {
        name: 'Berkeley Mansion - Part 1',
        objset: 0x01,
        area: 0x07,
        submap: 0,
        actors: [
            enemy.spearKnight(0x04, 0x0E, 0x02, 0x5AD4),
            // block
            enemy.skeleton(0x08, 0x10, 0x02, 0x5ADC),
            enemy.skeleton(0x08, 0x14, 0x02, 0x5AE0),
            enemy.skeleton(0x0C, 0x08, 0x02, 0x5AE4),
            enemy.spearKnight(0x0C, 0x1E, 0x02, 0x5AE8),
            enemy.blob(0x14, 0x0E, 0x01, 0x5AEC),
            enemy.gargoyle(0x14, 0x18, 0x02, 0x5AF0),
            enemy.skeleton(0x18, 0x08, 0x02, 0x5AF4),
            enemy.skeleton(0x18, 0x1E, 0x02, 0x5AF8),
            enemy.skeleton(0x18, 0x26, 0x02, 0x5AFC),
            enemy.blob(0x1C, 0x0E, 0x01, 0x5B00),
            enemy.blob(0x1C, 0x18, 0x01, 0x5B04),
            enemy.blob(0x24, 0x0E, 0x01, 0x5B08),
            enemy.blob(0x24, 0x18, 0x01, 0x5B0C),
            enemy.skeleton(0x28, 0x08, 0x02, 0x5B10),
            enemy.blob(0x28, 0x18, 0x01, 0x5B14),
            enemy.skeleton(0x28, 0x1E, 0x02, 0x5B18),
            enemy.blob(0x2C, 0x0E, 0x01, 0x5B1C),
            enemy.gargoyle(0x2C, 0x26, 0x02, 0x5B20),
            enemy.skeleton(0x34, 0x0C, 0x02, 0x5B24),
            enemy.skeleton(0x34, 0x26, 0x02, 0x5B28),
            enemy.skeleton(0x38, 0x06, 0x02, 0x5B2C),
            enemy.skeleton(0x3C, 0x0C, 0x02, 0x5B30),
            enemy.skeleton(0x3C, 0x22, 0x02, 0x5B34),
            fixture.book(0x3E, 0x0C, 0x1E, 0x5B38)
        ]
    },
    {
        name: 'Berkeley Mansion - Part 2',
        objset: 0x01,
        area: 0x07,
        submap: 0x01,
        actors: [
            fixture.book(0x01, 0x0C, 0x1F, 0x5B3D),
            enemy.gargoyle(0x04, 0x26, 0x02, 0x5B41),
            npc.merchant(0x07, 0x0C, 0x06, 0x5B45),
            enemy.spearKnight(0x08, 0x22, 0x02, 0x5B49),
            enemy.boneThrower(0x0C, 0x06, 0x02, 0x5B4D),
            enemy.gargoyle(0x0C, 0x26, 0x02, 0x5B51),
            enemy.skeleton(0x14, 0x1C, 0x02, 0x5B55),
            enemy.spearKnight(0x14, 0x22, 0x02, 0x5B59),
            enemy.spearKnight(0x14, 0x26, 0x02, 0x5B5D),
            enemy.boneThrower(0x18, 0x06, 0x02, 0x5B61),
            enemy.skeleton(0x18, 0x16, 0x02, 0x5B65),
            enemy.skeleton(0x1C, 0x0C, 0x02, 0x5B69),
            enemy.skeleton(0x1C, 0x12, 0x02, 0x5B6D),
            enemy.spearKnight(0x1C, 0x26, 0x02, 0x5B71),
            enemy.skeleton(0x28, 0x12, 0x02, 0x5B75),
            enemy.skeleton(0x28, 0x1E, 0x02, 0x5B79),
            enemy.skeleton(0x28, 0x24, 0x02, 0x5B7D),
            enemy.blob(0x2C, 0x16, 0x01, 0x5B81),
            enemy.skeleton(0x2C, 0x1A, 0x02, 0x5B85),
            enemy.skeleton(0x2C, 0x26, 0x02, 0x5B89),
            fixture.book(0x2E, 0x16, 0x20, 0x5B8D),
            enemy.blob(0x34, 0x26, 0x01, 0x5B91),
            enemy.blob(0x38, 0x26, 0x01, 0x5B95),
            fixture.orb(0x3D, 0x15, 0x18, 0x5B99)
        ]
    },
    {
        name: 'Rover Mansion - Part 1',
        objset: 0x01,
        area: 0x08,
        submap: 0,
        actors: [
            enemy.spearKnight(0x04, 0x0A, 0x04, 0x5BA2),
            enemy.skeleton(0x08, 0x10, 0x04, 0x5BA6),
            enemy.skeleton(0x08, 0x18, 0x04, 0x5BAA),
            enemy.spearKnight(0x08, 0x28, 0x04, 0x5BAE),
            enemy.skeleton(0x0C, 0x0A, 0x04, 0x5BB2),
            enemy.skeleton(0x0C, 0x20, 0x04, 0x5BB6),
            enemy.boneThrower(0x0C, 0x28, 0x04, 0x5BBA),
            enemy.gargoyle(0x14, 0x0A, 0x04, 0x5BBE),
            enemy.mansionBat(0x14, 0x0C, 0x04, 0x5BC2),
            enemy.mansionBat(0x14, 0x16, 0x04, 0x5BC6),
            enemy.boneThrower(0x14, 0x28, 0x04, 0x5BCA),
            enemy.spearKnight(0x18, 0x10, 0x04, 0x5BCE),
            enemy.mansionBat(0x18, 0x16, 0x04, 0x5BD2),
            enemy.skeleton(0x18, 0x28, 0x04, 0x5BD6),
            enemy.gargoyle(0x1C, 0x0A, 0x04, 0x5BDA),
            enemy.mansionBat(0x1C, 0x0C, 0x04, 0x5BDE),
            enemy.mansionBat(0x1C, 0x16, 0x04, 0x5BE2),
            enemy.skeleton(0x1C, 0x20, 0x04, 0x5BE6),
            enemy.skeleton(0x23, 0x1E, 0x04, 0x5BEA),
            enemy.skeleton(0x24, 0x0A, 0x04, 0x5BEE),
            enemy.skeleton(0x24, 0x10, 0x04, 0x5BF2),
            enemy.skeleton(0x27, 0x1C, 0x04, 0x5BF6),
            enemy.skeleton(0x28, 0x0A, 0x04, 0x5BFA),
            enemy.skeleton(0x2C, 0x16, 0x04, 0x5BFE),
            enemy.skeleton(0x2C, 0x22, 0x04, 0x5C02)
        ]
    },
    {
        name: 'Rover Mansion - Part 2',
        objset: 0x01,
        area: 0x08,
        submap: 0x01,
        actors: [
            enemy.boneThrower(0x03, 0x28, 0x04, 0x5C07),
            enemy.boneThrower(0x07, 0x28, 0x04, 0x5C0B),
            enemy.skeleton(0x14, 0x14, 0x04, 0x5C0F),
            enemy.skeleton(0x14, 0x1C, 0x04, 0x5C13),
            enemy.skeleton(0x18, 0x16, 0x04, 0x5C17),
            enemy.skeleton(0x18, 0x22, 0x04, 0x5C1B),
            enemy.skeleton(0x24, 0x08, 0x04, 0x5C1F),
            enemy.skeleton(0x24, 0x12, 0x04, 0x5C23),
            enemy.spearKnight(0x24, 0x1A, 0x04, 0x5C27),
            // block
            enemy.skeleton(0x28, 0x0E, 0x04, 0x5C2F),
            enemy.spearKnight(0x28, 0x1A, 0x04, 0x5C33),
            enemy.skeleton(0x2C, 0x08, 0x04, 0x5C37),
            enemy.spearKnight(0x34, 0x08, 0x04, 0x5C3B),
            enemy.boneThrower(0x34, 0x28, 0x04, 0x5C3F),
            enemy.skeleton(0x38, 0x22, 0x04, 0x5C43),
            npc.merchant(0x38, 0x28, 0x06, 0x5C47),
            fixture.orb(0x3D, 0x15, 0x19, 0x5C4B),
            fixture.book(0x3E, 0x08, 0x21, 0x5C4F),
            fixture.book(0x3E, 0x22, 0x22, 0x5C53)
        ]
    },
    {
        name: 'Brahm Mansion - Part 1',
        objset: 0x01,
        area: 0x09,
        submap: 0,
        actors: [
            fixture.book(0x01, 0x10, 0x23, 0x5C60),
            enemy.skeleton(0x03, 0x10, 0x08, 0x5C64),
            enemy.skeleton(0x04, 0x2E, 0x08, 0x5C68),
            enemy.skeleton(0x08, 0x1E, 0x08, 0x5C6C),
            enemy.blob(0x08, 0x2A, 0x04, 0x5C70),
            enemy.skeleton(0x0C, 0x16, 0x08, 0x5C74),
            enemy.blob(0x0C, 0x24, 0x04, 0x5C78),
            enemy.spearKnight(0x0C, 0x30, 0x08, 0x5C7C),
            enemy.skeleton(0x14, 0x0E, 0x08, 0x5C80),
            enemy.spearKnight(0x14, 0x24, 0x08, 0x5C84),
            enemy.gargoyle(0x18, 0x08, 0x08, 0x5C88),
            enemy.skeleton(0x18, 0x16, 0x08, 0x5C8C),
            enemy.skeleton(0x18, 0x2A, 0x08, 0x5C90),
            enemy.spearKnight(0x18, 0x30, 0x08, 0x5C94),
            enemy.skeleton(0x1C, 0x0E, 0x08, 0x5C98),
            enemy.skeleton(0x1C, 0x1E, 0x08, 0x5C9C),
            npc.merchant(0x23, 0x16, 0x06, 0x5CA0),
            enemy.spearKnight(0x24, 0x20, 0x08, 0x5CA4),
            enemy.blob(0x24, 0x30, 0x04, 0x5CA8),
            enemy.blob(0x24, 0x36, 0x04, 0x5CAC),
            enemy.spearKnight(0x28, 0x08, 0x08, 0x5CB0),
            enemy.spearKnight(0x28, 0x18, 0x08, 0x5CB4),
            enemy.spearKnight(0x28, 0x1C, 0x08, 0x5CB8),
            enemy.skeleton(0x2C, 0x26, 0x08, 0x5CBC)
        ]
    },
    {
        name: 'Brahm Mansion - Part 2',
        objset: 0x01,
        area: 0x09,
        submap: 0x01,
        actors: [
            enemy.gargoyle(0x04, 0x0C, 0x08, 0x5CC1),
            enemy.spearKnight(0x04, 0x16, 0x08, 0x5CC5),
            enemy.mansionBat(0x04, 0x32, 0x04, 0x5CC9),
            enemy.mansionBat(0x08, 0x32, 0x04, 0x5CCD),
            enemy.gargoyle(0x0C, 0x0C, 0x08, 0x5CD1),
            enemy.mansionBat(0x0C, 0x32, 0x04, 0x5CD5),
            fixture.book(0x0E, 0x18, 0x24, 0x5CD9)
        ]
    },
    {
        name: 'Brahm Mansion - Death Fight',
        objset: 0x01,
        area: 0x09,
        submap: 0x02,
        actors: [
            enemy.death(0x08, 0x08, 0x80, 0x5CDE)
        ]
    },
    {
        name: 'Brahm Mansion - Orb Room',
        objset: 0x01,
        area: 0x09,
        submap: 0x03,
        actors: [
            fixture.orb(0x0D, 0x07, 0x1A, 0x5CE3)
        ]
    },
    {
        name: 'Bodley Mansion - Part 1',
        objset: 0x01,
        area: 0x0A,
        submap: 0,
        actors: [
            enemy.skeleton(0x04, 0x0C, 0x0F, 0x5F0E),
            enemy.spearKnight(0x08, 0x28, 0x0F, 0x5F12),
            enemy.rock(0x09, 0x0C, 0x00, 0x5F16),
            enemy.rock(0x0A, 0x0C, 0x00, 0x5F1A),
            enemy.rock(0x0B, 0x0C, 0x00, 0x5F1E),
            enemy.rock(0x0C, 0x0C, 0x00, 0x5F22),
            enemy.rock(0x0D, 0x0C, 0x00, 0x5F26),
            enemy.rock(0x0E, 0x0C, 0x00, 0x5F2A),
            enemy.rock(0x0F, 0x0C, 0x00, 0x5F2E),
            enemy.blob(0x14, 0x12, 0x08, 0x5F32),
            enemy.skeleton(0x14, 0x28, 0x0F, 0x5F36),
            enemy.skeleton(0x18, 0x0C, 0x0F, 0x5F3A),
            enemy.skeleton(0x18, 0x1A, 0x0F, 0x5F3E),
            enemy.skeleton(0x18, 0x20, 0x0F, 0x5F42),
            enemy.blob(0x1C, 0x12, 0x08, 0x5F46),
            enemy.skeleton(0x24, 0x08, 0x0F, 0x5F4A),
            enemy.skeleton(0x24, 0x28, 0x0F, 0x5F4E),
            enemy.skeleton(0x28, 0x06, 0x0F, 0x5F52),
            enemy.skeleton(0x28, 0x20, 0x0F, 0x5F56),
            enemy.skeleton(0x34, 0x0C, 0x0F, 0x5F5A),
            enemy.skeleton(0x34, 0x20, 0x0F, 0x5F5E),
            enemy.skeleton(0x3C, 0x06, 0x0F, 0x5F62)
        ]
    },
    {
        name: 'Bodley Mansion - Part 2',
        objset: 0x01,
        area: 0x0A,
        submap: 0x01,
        actors: [
            enemy.skeleton(0x04, 0x0C, 0x0F, 0x5F67),
            enemy.skeleton(0x04, 0x14, 0x0F, 0x5F6B),
            enemy.skeleton(0x04, 0x2E, 0x0F, 0x5F6F),
            enemy.skeleton(0x08, 0x06, 0x0F, 0x5F73),
            enemy.skeleton(0x08, 0x14, 0x0F, 0x5F77),
            enemy.skeleton(0x08, 0x1A, 0x0F, 0x5F7B),
            enemy.skeleton(0x08, 0x20, 0x0F, 0x5F7F),
            enemy.skeleton(0x08, 0x2C, 0x0F, 0x5F83),
            enemy.skeleton(0x0C, 0x0C, 0x0F, 0x5F87),
            enemy.skeleton(0x0C, 0x36, 0x0F, 0x5F8B),
            enemy.skeleton(0x14, 0x36, 0x0F, 0x5F8F),
            enemy.skeleton(0x18, 0x30, 0x0F, 0x5F93),
            npc.merchant(0x18, 0x2A, 0x06, 0x5F97),
            enemy.skeleton(0x1C, 0x1A, 0x0F, 0x5F9B),
            enemy.skeleton(0x1C, 0x36, 0x0F, 0x5F9F),
            enemy.skeleton(0x28, 0x1A, 0x0F, 0x5FA3),
            fixture.book(0x2C, 0x16, 0x25, 0x5FA7),
            fixture.orb(0x2D, 0x31, 0x1B, 0x5FAB),
            enemy.boneThrower(0x34, 0x28, 0x06, 0x5FAF),
            enemy.spearKnight(0x38, 0x14, 0x0F, 0x5FB3),
            enemy.spearKnight(0x38, 0x1A, 0x0F, 0x5FB7),
            enemy.spearKnight(0x3C, 0x20, 0x0F, 0x5FBB)
        ]
    },
    {
        name: 'Jova Woods',
        objset: 0x02,
        area: 0,
        submap: 0,
        actors: [
            enemy.werewolf(0x08, 0x0C, 0x02, 0x5FF4),
            enemy.skeleton(0x0C, 0x0C, 0x01, 0x5FF8),
            enemy.werewolf(0x14, 0x0C, 0x02, 0x5FFC),
            enemy.skeleton(0x18, 0x0A, 0x01, 0x6000),
            enemy.werewolf(0x1C, 0x08, 0x02, 0x6004),
            enemy.skeleton(0x28, 0x0A, 0x01, 0x6008),
            enemy.skeleton(0x2C, 0x0C, 0x01, 0x600C),
            enemy.skeleton(0x34, 0x0A, 0x01, 0x6010),
            enemy.skeleton(0x3C, 0x0B, 0x01, 0x6014)
        ]
    },
    {
        name: 'Jova-Veros Bridge',
        objset: 0x02,
        area: 0,
        submap: 0x01,
        actors: [
            enemy.skeleton(0x04, 0x0A, 0x01, 0x6019),
            enemy.skeleton(0x0C, 0x09, 0x01, 0x601D),
            enemy.fishman(0x0E, 0x0C, 0x01, 0x6021),
            enemy.fishman(0x15, 0x0C, 0x01, 0x6025),
            enemy.fishman(0x1A, 0x0C, 0x01, 0x6029),
            enemy.fishman(0x25, 0x0C, 0x01, 0x602D),
            enemy.fishman(0x2A, 0x0C, 0x01, 0x6031),
            enemy.skeleton(0x34, 0x09, 0x01, 0x6035),
            enemy.fishman(0x35, 0x0C, 0x01, 0x6039),
            enemy.skeleton(0x38, 0x0A, 0x01, 0x603D)
        ]
    },
    {
        name: 'Veros Woods - Part 1',
        objset: 0x02,
        area: 0,
        submap: 0x02,
        actors: [
            enemy.skeleton(0x08, 0x06, 0x01, 0x6042),
            enemy.skeleton(0x08, 0x0C, 0x01, 0x6046),
            // low priority sprite
            enemy.skeleton(0x14, 0x06, 0x01, 0x604E),
            enemy.skeleton(0x18, 0x0C, 0x01, 0x6052),
            enemy.skeleton(0x19, 0x06, 0x01, 0x6056),
            enemy.skeleton(0x1D, 0x08, 0x01, 0x605A)
        ]
    },
    {
        name: 'Veros Woods - Part 2',
        objset: 0x02,
        area: 0,
        submap: 0x03,
        actors: [
            enemy.skeleton(0x04, 0x0A, 0x01, 0x605F),
            enemy.skeleton(0x08, 0x0B, 0x01, 0x6063),
            enemy.skeleton(0x0C, 0x0C, 0x01, 0x6067),
            // low priority sprite
            enemy.skeleton(0x14, 0x0A, 0x01, 0x606F),
            enemy.skeleton(0x18, 0x0A, 0x01, 0x6073)
        ]
    },
    {
        name: 'Denis Woods - Part 1',
        objset: 0x02,
        area: 0x01,
        submap: 0,
        actors: [
            enemy.skeleton(0x04, 0x0A, 0x01, 0x6078),
            enemy.fishman(0x0A, 0x0C, 0x01, 0x607C),
            enemy.skeleton(0x14, 0x0A, 0x01, 0x6080),
            enemy.skeleton(0x18, 0x0A, 0x01, 0x6084)
        ]
    },
    {
        name: 'Aljiba Woods - Part 3',
        objset: 0x02,
        area: 0x02,
        submap: 0,
        actors: [
            enemy.spider(0x08, 0x06, 0x02, 0x666A),
            enemy.skeleton(0x0C, 0x0C, 0x02, 0x666E),
            enemy.skeleton(0x14, 0x0A, 0x02, 0x6672),
            enemy.spider(0x18, 0x06, 0x02, 0x6676),
            enemy.skeleton(0x1C, 0x0B, 0x02, 0x667A)
        ]
    },
    {
        name: 'Dabi\'s Path - Part 1',
        objset: 0x02,
        area: 0x03,
        submap: 0,
        actors: [
            // low priority sprite
            enemy.skeleton(0x08, 0x0C, 0x02, 0x6683),
            enemy.eyeball(0x08, 0x12, 0x02, 0x6687),
            enemy.skeleton(0x08, 0x18, 0x02, 0x668B),
            enemy.eyeball(0x0C, 0x06, 0x02, 0x668F),
            enemy.skeleton(0x0C, 0x18, 0x02, 0x6693),
            // low priority sprite
            enemy.eyeball(0x14, 0x0C, 0x02, 0x669B),
            enemy.skeleton(0x14, 0x1A, 0x02, 0x669F),
            enemy.eyeball(0x18, 0x06, 0x02, 0x66A3),
            enemy.skeleton(0x18, 0x16, 0x02, 0x66A7),
            enemy.eyeball(0x1C, 0x0C, 0x02, 0x66AB)
        ]
    },
    {
        name: 'Dabi\'s Path - Part 2',
        objset: 0x02,
        area: 0x03,
        submap: 0x01,
        actors: [
            fixture.sacredFlame(0x01, 0x0C, 0x76, 0x66B0),
            enemy.eyeball(0x04, 0x04, 0x02, 0x66B4),
            enemy.zigzagBat(0x04, 0x0C, 0x02, 0x66B8),
            enemy.eyeball(0x0C, 0x06, 0x02, 0x66BC),
            enemy.zigzagBat(0x0C, 0x0C, 0x02, 0x66C0),
            enemy.eyeball(0x14, 0x06, 0x02, 0x66C4),
            enemy.zigzagBat(0x14, 0x0C, 0x02, 0x66C8),
            enemy.zigzagBat(0x1C, 0x0C, 0x02, 0x66CC)
        ]
    },
    {
        name: 'Aljiba Woods - Part 1',
        objset: 0x02,
        area: 0x03,
        submap: 0x02,
        actors: [
            enemy.spider(0x04, 0x04, 0x02, 0x66D1),
            fixture.book(0x05, 0x0D, 0x0D, 0x66D5),
            enemy.skeleton(0x08, 0x08, 0x02, 0x66D9),
            enemy.spider(0x0C, 0x06, 0x02, 0x66DD),
            enemy.spider(0x14, 0x06, 0x02, 0x66E1),
            enemy.skeleton(0x18, 0x0A, 0x02, 0x66E5),
            enemy.skeleton(0x1C, 0x08, 0x02, 0x66E9)
        ]
    },
    {
        name: 'Aljiba Woods - Part 2',
        objset: 0x02,
        area: 0x03,
        submap: 0x03,
        actors: [
            enemy.skeleton(0x04, 0x08, 0x02, 0x66EE),
            enemy.skeleton(0x08, 0x0A, 0x02, 0x66F2),
            enemy.skeleton(0x0C, 0x0C, 0x02, 0x66F6),
            enemy.skeleton(0x14, 0x0C, 0x02, 0x66FA),
            enemy.skeleton(0x18, 0x0A, 0x02, 0x66FE)
        ]
    },
    {
        name: 'Denis Woods - Part 2',
        objset: 0x02,
        area: 0x04,
        submap: 0,
        actors: [
            enemy.skeleton(0x04, 0x0A, 0x02, 0x6703),
            enemy.skeleton(0x08, 0x0A, 0x02, 0x6707),
            enemy.skeleton(0x0C, 0x0B, 0x02, 0x670B),
            enemy.skeleton(0x14, 0x08, 0x02, 0x670F),
            enemy.zigzagBat(0x16, 0x0C, 0x02, 0x6713),
            enemy.skeleton(0x18, 0x06, 0x02, 0x6717),
            // low priority sprite
            enemy.skeleton(0x24, 0x06, 0x02, 0x671F),
            // low priority sprite
            enemy.skeleton(0x28, 0x08, 0x02, 0x6727),
            enemy.skeleton(0x2C, 0x08, 0x02, 0x672B),
            enemy.zigzagBat(0x2D, 0x0C, 0x02, 0x672F)
        ]
    },
    {
        name: 'Denis Woods - Part 3',
        objset: 0x02,
        area: 0x04,
        submap: 0x01,
        actors: [
            enemy.spider(0x04, 0x06, 0x02, 0x6734),
            enemy.skeleton(0x08, 0x0C, 0x02, 0x6738),
            enemy.spider(0x0C, 0x06, 0x02, 0x673C),
            enemy.spider(0x14, 0x06, 0x02, 0x6740),
            enemy.skeleton(0x18, 0x0A, 0x02, 0x6744)
        ]
    },
    {
        name: 'Yuba Lake Path',
        objset: 0x02,
        area: 0x05,
        submap: 0,
        actors: [
            enemy.skeleton(0x08, 0x0A, 0x02, 0x6749),
            enemy.skeleton(0x0C, 0x08, 0x02, 0x674D),
            enemy.eyeball(0x14, 0x0C, 0x02, 0x6751),
            enemy.skeleton(0x18, 0x06, 0x02, 0x6755),
            enemy.skeleton(0x1C, 0x06, 0x02, 0x6759),
            enemy.eyeball(0x1D, 0x0C, 0x02, 0x675D),
            enemy.skeleton(0x24, 0x06, 0x02, 0x6761),
            // block
            enemy.skeleton(0x2C, 0x04, 0x02, 0x6769),
            // block
            enemy.skeleton(0x38, 0x06, 0x02, 0x6771)
        ]
    },
    {
        name: 'Yuba Lake Path',
        objset: 0x02,
        area: 0x05,
        submap: 0x01
    },
    {
        name: 'Dead River to Brahm',
        objset: 0x02,
        area: 0x06,
        submap: 0,
        actors: [
            enemy.lizardman(0x04, 0x0B, 0x04, 0x6089),
            enemy.lizardman(0x08, 0x0B, 0x04, 0x608D),
            npc.ferryMan(0x12, 0x0C, 0x01, 0x6091),
            enemy.fishman(0x18, 0x0C, 0x04, 0x6095),
            enemy.fishman(0x1C, 0x0C, 0x04, 0x6099)
        ]
    },
    {
        name: 'Dead River - Part 2',
        objset: 0x02,
        area: 0x07,
        submap: 0,
        actors: [
            enemy.lizardman(0x04, 0x0B, 0x04, 0x6089),
            enemy.lizardman(0x08, 0x0B, 0x04, 0x608D),
            npc.ferryMan(0x12, 0x0C, 0x01, 0x6091),
            enemy.fishman(0x18, 0x0C, 0x04, 0x6095),
            enemy.fishman(0x1C, 0x0C, 0x04, 0x6099)
        ]
    },
    {
        name: 'Dead River - Part 1',
        objset: 0x02,
        area: 0x07,
        submap: 0x01,
        actors: [
            enemy.fishman(0x04, 0x0C, 0x04, 0x609E),
            enemy.fishman(0x08, 0x0C, 0x04, 0x60A2),
            npc.ferryMan(0x0E, 0x0C, 0x00, 0x60A6),
            enemy.lizardman(0x18, 0x0B, 0x04, 0x60AA),
            enemy.lizardman(0x1A, 0x0B, 0x04, 0x60AE)
        ]
    },
    {
        name: 'Belasco Marsh',
        objset: 0x02,
        area: 0x07,
        submap: 0x02,
        actors: [
            enemy.leech(0x06, 0x0D, 0x04, 0x60B3),
            // low priority sprite
            enemy.mudman(0x0A, 0x0C, 0x04, 0x60BB),
            enemy.mudman(0x0C, 0x0C, 0x04, 0x60BF),
            // low priority sprite
            enemy.mudman(0x16, 0x0C, 0x04, 0x60C7),
            enemy.wolf(0x1D, 0x08, 0x04, 0x60CB),
            enemy.wolf(0x28, 0x0A, 0x04, 0x60CF),
            enemy.lizardman(0x2C, 0x0C, 0x04, 0x60D3),
            enemy.lizardman(0x34, 0x0C, 0x04, 0x60D7),
            enemy.lizardman(0x38, 0x0C, 0x04, 0x60DB)
        ]
    },
    {
        name: 'North Bridge',
        objset: 0x02,
        area: 0x08,
        submap: 0,
        actors: [
            enemy.skeleton(0x08, 0x09, 0x0F, 0x60E0),
            enemy.skeleton(0x0C, 0x09, 0x0F, 0x60E4),
            enemy.fishman(0x0E, 0x0C, 0x0F, 0x60E8),
            enemy.fishman(0x15, 0x0C, 0x0F, 0x60EC),
            // block
            enemy.fishman(0x1A, 0x0C, 0x0F, 0x60F4),
            enemy.fishman(0x25, 0x0C, 0x0F, 0x60F8),
            // block
            enemy.fishman(0x2A, 0x0C, 0x0F, 0x6100),
            enemy.skeleton(0x34, 0x09, 0x0F, 0x6104),
            enemy.fishman(0x35, 0x0C, 0x0F, 0x6108),
            enemy.skeleton(0x38, 0x0A, 0x0F, 0x610C)
        ]
    },
    {
        name: 'Dora Woods - Part 1',
        objset: 0x02,
        area: 0x08,
        submap: 0x01,
        actors: [
            enemy.lizardman(0x04, 0x0A, 0x0F, 0x6111),
            enemy.lizardman(0x08, 0x0A, 0x0F, 0x6115),
            enemy.lizardman(0x0C, 0x0B, 0x0F, 0x6119),
            // low priority sprite
            enemy.lizardman(0x18, 0x0C, 0x0F, 0x6121),
            enemy.lizardman(0x1C, 0x08, 0x0F, 0x6125)
        ]
    },
    {
        name: 'Dora Woods - Part 2',
        objset: 0x02,
        area: 0x08,
        submap: 0x02,
        actors: [
            enemy.skeleton(0x04, 0x0A, 0x0F, 0x612A),
            enemy.skeleton(0x08, 0x0B, 0x0F, 0x612E),
            enemy.skeleton(0x0C, 0x0C, 0x0F, 0x6132),
            enemy.skeleton(0x14, 0x0A, 0x0F, 0x6136),
            // low priority sprite
            enemy.skeleton(0x18, 0x0A, 0x0F, 0x613E)
        ]
    },
    {
        name: 'Dora Woods - Part 3',
        objset: 0x02,
        area: 0x09,
        submap: 0
    },
    {
        name: 'Long Bridge to Bordia Mountains (Dead End Swamp)',
        objset: 0x02,
        area: 0x09,
        submap: 0x01,
        actors: [
            enemy.fishman(0x0C, 0x0C, 0x0F, 0x6143),
            enemy.fishman(0x14, 0x0C, 0x0F, 0x6147),
            enemy.fishman(0x18, 0x0C, 0x0F, 0x614B),
            enemy.fishman(0x1C, 0x0C, 0x0F, 0x614F),
            enemy.fishman(0x24, 0x0C, 0x0F, 0x6153),
            enemy.fishman(0x28, 0x0C, 0x0F, 0x6157),
            enemy.fishman(0x2C, 0x0C, 0x0F, 0x615B),
            enemy.fishman(0x34, 0x0C, 0x0F, 0x615F)
        ]
    },
    {
        name: 'Bordia Mountains (Dead End Swamp)',
        objset: 0x02,
        area: 0x09,
        submap: 0x02,
        actors: [
            enemy.skeleton(0x04, 0x0C, 0x0F, 0x6164),
            enemy.skeleton(0x08, 0x06, 0x0F, 0x6168),
            // low priority sprite
            enemy.mudman(0x0A, 0x0C, 0x0F, 0x6170),
            enemy.skeleton(0x12, 0x06, 0x0F, 0x6174),
            // low priority sprite
            enemy.mudman(0x1A, 0x0C, 0x0F, 0x617C),
            enemy.skeleton(0x23, 0x06, 0x0F, 0x6180),
            // low priority sprite
            enemy.mudman(0x2A, 0x0C, 0x0F, 0x6188),
            // low priority sprite
            enemy.mudman(0x38, 0x0C, 0x0F, 0x6190)
        ]
    }
];