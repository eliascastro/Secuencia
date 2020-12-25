package main

import (
	"fmt"

	"github.com/eliascastro/Secuencia/game"
)

func main() {
	//Iniciar el conjunto de naipes en el arreglo
	var cards []*game.Card
	//Recorrer 4 veces por el tipo de figura
	var color string
	var figure string

	for g := 1; g <= 4; g++ {
		//Ahora recorrer 13 veces por el numero de naipe
		switch g {
		case 1:
			color = "Black"
			figure = "Spade"
		case 2:
			color = "Red"
			figure = "Diamond"
		case 3:
			color = "Black"
			figure = "Club"
		case 4:
			color = "Red"
			figure = "Heart"
		}

		for e := 1; e <= 13; e++ {
			nuevaA := &game.Card{
				Num:    e,
				Figure: figure,
				Color:  color,
				Item:   "A",
			}
			nuevaB := &game.Card{
				Num:    e,
				Figure: figure,
				Color:  color,
				Item:   "B",
			}
			cards = append(cards, nuevaA, nuevaB)
		}
	}

	for i, m := range cards {
		fmt.Println(m.Color, " ", m.Figure, " ", m.Num, " ", m.Item, "->", i)
	}
}
