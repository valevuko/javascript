4 načina na koji možemo dodati JS:
1. unutar heada - očitava se skripta po redu i može se dogoditi da ne očita podatak koji tražimo
2. nakon sadržaja koji tražimo iznad bodya
3. asyns - sve se izvršava kao i običnim html-om, ali će se downloadati scripta i za to vrijeme nastavi sa parsanjem HTML-a pa zato nekad bude prikazan consol nekad ne, 
        downloada se dokument paralelno i tek kad ju završi će ju vidjeti
4. defer - skripta se downloada paralelno sa parsanjem HTML dokumenta, HTML parsanje ide dok kraja pa će provjeriti je li downloadanje završeno te će tek na kraju očitati script.

Znakovi jednakosti:
= - dodavanje varijabli (pridjeljivanje) vrijednosti
== - provjera vrijednosti
=== - provjera tipa podatka i vrijednosti
 - najveći zajebi su dvostruki!