import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
	// eslint-disable-next-line no-unused-vars
	const [people, setPeople] = useState([
		{
			name: "Elon Musk",
			url:
				"https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
		},
		{
			name: "Jeff bezos",
			url:
				"https://www.biography.com/.image/t_share/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg",
		},
	]);
	const swiped = (direction, nameToDelete) => {
		console.log("removing" + nameToDelete);
	};
	const outOfFrame = (name) => {
		console.log(name + "left the screen!");
	};

	return (
		<div className="tinderCards">
			<div className="tinderCards__cardContainer">
				{people.map((person) => (
					<TinderCard
						className="swipe"
						key={person.name}
						preventSwipe={["up", "down"]}
						onSwipe={(dir) => swiped(dir, person.name)}
						onCardLeftScreen={() => outOfFrame(person.name)}
					>
						<div
							style={{ backgroundImage: `url(${person.url})` }}
							className="card"
						>
							<h3>{person.name}</h3>
						</div>
					</TinderCard>
				))}
			</div>
		</div>
	);
}

export default TinderCards;
