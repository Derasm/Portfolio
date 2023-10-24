
Konteksten er her nedenstående tegning. Sentispec har et system som optager et reolsystem indeholdende paller. Systemer detekterer paller og labels og distribuerer pallerne ud fra labels placering.

Nogle kunder kører med brede paller som er 110cm (de blå) og standard europaller der er 80cm brede (de hvide).

Hylderne har plads til tre Europaller per hylde, men ved de brede paller placerer de to paller i siderne (plads 1 og 3).

Vi har AI modeller til at detektere labels og hyldesystem (stolper og vanger).

Vi skal forbedre vores system til at placere de brede paller i deres korrekte lokation 1 og 3, selvom label er placeret tættere på lokation 2 og dermed bliver fortolket som værende i plads nummer to. Akkuratessen skal være, at over 90% af pallerne placeres korrekt.


## Umiddelbar løsning
  Hvis labels er potentielle ikke-sikre måder at tjekke på, bør dette augmenteres med afstandsdata for at sikre høj præcision. Mit forslag er derfor:
  1. Afstandsbedømmelse(SPACE) af pladsen på hylden og første palle. Ved at bruge Recording unit som reference, kan vi bedømme afstanden på hylden og størrelsen på første palle og dermed vurdere om der er plads på hylden til en wide eller der skal bruges en europallet.
  2. implementation: 
  Step 1 - get distance measurement of first pallet:  Get space of first pallet, if no pallet in location 1 assume shelf is empty.
  Step 2 - algoritme: 
   If current pallet is wide and shelf is empty, place pallet in location 1.
   If current pallet is wide and shelf has a wide pallet in first position, place pallet in location 3.
  
  If current pallet is europallet and shelf is empty, place pallet in location 1.
  If current pallet is europallet and shelf has a wide pallet in first position, place pallet in location 3.

## Quality assurance
- Testing: Test incorrect labels, wrongly placed labels, mixed shelves of wide and europallets.
- Test with different distances between pallets and labels.
- 


