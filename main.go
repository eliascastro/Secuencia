package main

import (
	"fmt"
	"math/rand"
	"time"

	"github.com/eliascastro/Secuencia/game"
)

func main() {
	//Iniciar el conjunto de naipes en el arreglo
	var cards []*game.Card
	var players []*game.Player

	var color string
	var figure string

	//Generacion de tarjetas para el juego
	for g := 1; g <= 4; g++ {
		//Recorrer 4 veces por el tipo de figura
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

		//Ahora recorrer 13 veces por el numero de naipe
		for e := 1; e <= 13; e++ {
			cards = append(cards, &game.Card{e, figure, color, "A"}, &game.Card{e, figure, color, "B"})
		}
	}

	for i, m := range cards {
		fmt.Println(m.Color, " ", m.Figure, " ", m.Num, " ", m.Item, "->", i)
	}

	rand.Seed(time.Now().UnixNano())
	rand.Shuffle(len(cards), func(i, j int) { cards[i], cards[j] = cards[j], cards[i] })

	fmt.Println("After Shuffle")

	for i, m := range cards {
		fmt.Println(m.Color, " ", m.Figure, " ", m.Num, " ", m.Item, "->", i)
	}

	//Hagamos de cuenta que son 2 jugadores
	player1 := &game.Player{
		Name: "Player 1",
		Team: "Blue",
	}
	player2 := &game.Player{
		Name: "Player 2",
		Team: "Green",
	}
	players = append(players, player1, player2)

	numPlayers := 2
	cardsByPlayer := 7

	totCards := cardsByPlayer * numPlayers

	turnPlayer := 0
	for g := 0; g < totCards; g++ {
		//Asignar la tarjeta al jugador en turno con un LIFO
		cardToPick := len(cards) - 1
		players[turnPlayer].Cards = append(players[turnPlayer].Cards, cards[cardToPick])

		cards = cards[:cardToPick]

		turnPlayer++
		if turnPlayer == numPlayers {
			turnPlayer = 0
		}
	}

	fmt.Println("-------------------------------------")
	fmt.Println("Final cards in deck")
	for i, m := range cards {
		fmt.Println(m.Color, " ", m.Figure, " ", m.Num, " ", m.Item, "->", i)
	}

	for _, g := range players {
		fmt.Println("Player ", g.Name, " ", g.Team)
		for _, e := range g.Cards {
			fmt.Println(e)
		}
	}

	//JUEGO LISTO, AHORA A JUGAR!!!
	playerTurn := 0
	turnPlayer = 0
	for {

		fmt.Printf("Player %d please provide your card num: ", turnPlayer+1)
		fmt.Scanln(&playerTurn)

		if playerTurn > 6 {
			break
		}

		//Take card from player cards
		selCard := players[turnPlayer].Cards[playerTurn]
		fmt.Println("Selected Card: ", selCard)

		//Include a new card from pile and remove the selected one
		cardToPick := len(cards) - 1
		players[turnPlayer].Cards = append(players[turnPlayer].Cards, cards[cardToPick])
		cards = cards[:cardToPick]

		//Remove the card from players
		players[turnPlayer].Cards[playerTurn] = players[turnPlayer].Cards[cardsByPlayer] //Copy element to previous one
		players[turnPlayer].Cards[cardsByPlayer] = nil                                   //Erase last element
		players[turnPlayer].Cards = players[turnPlayer].Cards[:cardsByPlayer]            //Remove element

		//Print new cards for player
		fmt.Println("New cards for player: ")
		for _, e := range players[turnPlayer].Cards {
			fmt.Println(e)
		}

		turnPlayer++
		if turnPlayer == numPlayers {
			turnPlayer = 0
		}
	}

	fmt.Println("JUEGO TERMINADO")

}
