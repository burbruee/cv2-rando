PHP
PHA
TYA
PHA
TXA
PHA

LDA *$7F



JSR ALREADY_DONE_ASM
BEQ ALREADY_DONE

ALREADY_DONE 

STA *$7F
CMP #34
BNE NEXT_THING
LDA *$91
ORA #2
STA *$91


; drac parts
LDA *$91
ORA ITEM_BIT
STA *$91

DONE PLA
TAX
PLA
TAY
PLA
PLP

RTS


; drac parts
LDA *$91
ORA ITEM_BIT
STA *$91

; crystal
LDA *$91
AND #3
CLC
ADC #1
ORA *91
STA *$91

; carry
LDA *$92
ORA ITEM_BIT
STA *$92

; weapons
LDA *$4A
ORA ITEM_BIT
STA *$4A

; whip
LDA $434
CLC
ADC #1
STA $434

; garlic
LDA *$92
ORA #8
STA *$92
LDA *$4D
CLC 
ADC #4
STA *$4D

; laurels
LDA *$92
ORA #4
STA *$92
LDA *$4C
CLC 
ADC #4
STA *$4C
