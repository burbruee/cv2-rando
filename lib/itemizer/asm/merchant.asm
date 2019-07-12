PHP

LDA *$7F

CMP #$32
BNE HOLY_WATER
<%= whiteCrystal %>
JMP $9999

HOLY_WATER CMP #$37
BNE DAGGER
<%= holyWater %>
JMP $9999

DAGGER CMP #$36
BNE GARLIC
<%= dagger %>
JMP $9999

GARLIC CMP #$2F
BNE LAURELS
LDA *$50
CMP #$0C
BNE GARLIC_ALBA
<%= garlicAljiba %>
JMP $9999
GARLIC_ALBA <%= garlicAlba %>
JMP $9999

LAURELS LDA *$7F
CMP #$30
BNE OAK_STAKE
LDA *$50

CMP #$0E
BNE LAURELS_ALBA
<%= laurelsAljiba %>
JMP $9999

LAURELS_ALBA CMP #$10
BNE LAURELS_ONDOL
<%= laurelsAlba %>
JMP $9999

LAURELS_ONDOL CMP #$13
BNE LAURELS_DOINA
<%= laurelsOndol %>
JMP $9999

LAURELS_DOINA CMP #$15
BNE LAURELS_NONE
<%= laurelsDoina %>
LAURELS_NONE JMP $9999

OAK_STAKE LDA *$7F
CMP #$1D
BEQ DO_OAK
JMP $9999
DO_OAK LDA *$50

CMP #$07
BNE OAK_HEART
<%= oakRib %>
JMP $9999

OAK_HEART CMP #$08
BNE OAK_EYE
<%= oakHeart %>
JMP $9999

OAK_EYE CMP #$09
BNE OAK_NAIL
<%= oakEye %>
JMP $9999

OAK_NAIL CMP #$0A
BNE OAK_RING
<%= oakNail %>
JMP $9999

OAK_RING CMP #$06
JMP $9999
<%= oakRing %>

PLP

; z_should_be_empty
LDA #$1

RTS
