PHP
TYA
PHA

LDY #$00

CHECK LDA $6000,Y
CMP *$7F
BNE NEXT

LDA $6001,Y
CMP *$30
BNE NEXT

LDA $6002,Y
CMP *$50
BNE NEXT

LDA $6003,Y
CMP *$51
BNE NEXT

BEQ DONE

NEXT CPY #$C
BEQ WHIP
INY
INY
INY
INY
BNE CHECK

WHIP LDA $434
ASL A
ASL A
TAY
LDA *$7F
STA $6000,Y
LDA *$30
STA $6001,Y
LDA *$50
STA $6002,Y
LDA *$51
STA $6003,Y
INC $434


DONE 
PLA
TAY
PLP

LDA $434

RTS