PHP

JSR $<%= isChecked %>
LDA $600C
CMP #$1
BNE CRYCHK
LDA #$18
BNE DONE

CRYCHK 
LDA $<%= saleIcons %>,Y
CMP #$5E
BEQ CRYS
CMP #$5F
BEQ CRYS
CMP #$6E
BNE DONE

CRYS 
LDA *$91
AND #$60
CLC
ROR A
ROR A
ROR A
ROR A
ROR A

STX $6000
TAX
CPX #$03
BNE LOAD
LDA #$02
TAX
LOAD LDA $<%= crystalIcons %>,X
LDX $6000

DONE 
PLP
RTS 