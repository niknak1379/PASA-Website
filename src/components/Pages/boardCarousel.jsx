import "./boardCarousel.css";
import AsalPic from "../../assets/Headshots/Asal.png";
import GolsaPic from "../../assets/Headshots/Golsa.png";
import HastiPic from "../../assets/Headshots/Hasti.png";
import JohnpierrePic from "../../assets/Headshots/Johnpierre.png";
import NazaninPic from "../../assets/Headshots/Nazanin.png";
import NikiPic from "../../assets/Headshots/Niki.png";
import RadinPic from "../../assets/Headshots/Radin.png";
import SheileenPic from "../../assets/Headshots/Sheileen.png";
import ElikaPic from "../../assets/Headshots/Elika.png";
import backArrow from "../../assets/Icons/arrowLeft.svg";
import forwardArrow from "../../assets/Icons/arrowRight.svg";
import { useEffect, useRef, useState } from "react";

function BoardCard(props) {
	return (
		<li className="cardDiv border-solid border-2 h-[500px] w-[300px] shrink-0">
			<span className="block h-2/3">
				<img
					src={props.Member.ImgSrc}
					className="object-cover size-full"
					alt={props.Member.Name + "'s picture"}
				/>
			</span>

			<h4 className="text-xl font-bold pl-8 pt-8">{props.Member.Name}</h4>
			<h5 className="font-bold pl-8 pt-4">{props.Member.Role}</h5>
		</li>
	);
}

export default function boardCarousel() {
	const [width, setWidth] = useState(0);
	const [isMobile, setIsMobile] = useState(false);

	let carouselRef = useRef(null);
	let leftButtonRef = useRef(null);
	let rightButtonRef = useRef(null);
	let Elika = {
		ImgSrc: ElikaPic,
		Name: "ELIKA",
		Role: "PRESIDENT",
	};
	let Nazanin = {
		ImgSrc: NazaninPic,
		Name: "NAZANIN",
		Role: "VICE-PRESIDENT",
	};
	let Asal = {
		ImgSrc: AsalPic,
		Name: "Asal",
		Role: "Event Coordinator",
	};
	let Golsa = {
		ImgSrc: GolsaPic,
		Name: "Golsa",
		Role: "Treasurer",
	};
	let Hasti = {
		ImgSrc: HastiPic,
		Name: "Hasti",
		Role: "Social Media Manager",
	};
	let Johnpierre = {
		ImgSrc: JohnpierrePic,
		Name: "Johnpierre",
		Role: "Head Event Coordinator",
	};
	let Niki = {
		ImgSrc: NikiPic,
		Name: "Niki",
		Role: "Event Coordinator",
	};
	let Radeen = {
		ImgSrc: RadinPic,
		Name: "Radeen",
		Role: "Event Coordinator",
	};
	let Sheileen = {
		ImgSrc: SheileenPic,
		Name: "Sheileen",
		Role: "Secretary",
	};
	let boardMemberArray = [
		Elika,
		Nazanin,
		Asal,
		Golsa,
		Hasti,
		Johnpierre,
		Niki,
		Radeen,
		Sheileen,
	];

	useEffect(() => {
		function updateCarasoulWidth() {
			let newWidth = 1024;
			if (window.innerWidth < 1024) {
				newWidth = document.body.clientWidth;
			}
			console.log(document.body.clientWidth);
			setWidth(newWidth - 20);
			carouselRef.current.style.width = width + "px";
		}

		updateCarasoulWidth();
		window.addEventListener("resize", updateCarasoulWidth);

		function updateMobileStatus() {
			console.log(window.screen.width);
			if (window.screen.width <= 640 || window.innerWidth <= 640) {
				console.log("setting mobile to true");
				setIsMobile(true);
			} else {
				console.log("setting mobile to false");
				setIsMobile(false);
			}
		}

		updateMobileStatus();
		window.addEventListener("resize", updateMobileStatus);

		return () => {
			window.removeEventListener("resize", updateCarasoulWidth);
			window.removeEventListener("resize", updateMobileStatus);
		};
	}, [width, isMobile]);

	function disableNavButtons() {
		let leftSpace = carouselRef.current.scrollLeft;
		let maxScroll =
			carouselRef.current.scrollWidth - carouselRef.current.clientWidth - 10;

		if (leftSpace == 0) {
			leftButtonRef.current.classList.add("disabled");
		} else if (maxScroll <= leftSpace) {
			rightButtonRef.current.classList.add("disabled");
		} else {
			leftButtonRef.current.classList.remove("disabled");
			rightButtonRef.current.classList.remove("disabled");
		}
	}

	return (
		<section id="board" className="py-32 flex flex-col">
			<div className="carouselHeader flex flex-col sm:flex-row pb-8">
				<h3 className="text-3xl py-2 text-center sm:text-4xl md:text-6xl sm:text-left">
					Meet Our Board Members
				</h3>
				{!isMobile && (
					<nav className="ml-auto">
						<button
							className="px-4 h-full"
							ref={leftButtonRef}
							onClick={() => {
								carouselRef.current.scrollBy({
									left: -500,
									behavior: "smooth",
								});
							}}
						>
							<img alt="Back Arrow" src={backArrow} />
						</button>

						<button
							className="px-4 h-full"
							ref={rightButtonRef}
							onClick={() => {
								console.log("right");
								carouselRef.current.scrollBy({ left: 500, behavior: "smooth" });
							}}
						>
							<img alt="Forward Arrow" src={forwardArrow} />
						</button>
					</nav>
				)}
			</div>

			<ul
				className={"flex flex-row gap-8 overflow-x-auto w-full"}
				ref={carouselRef}
				onScroll={(e) => {
					disableNavButtons();
				}}
			>
				{boardMemberArray.map((item) => (
					<BoardCard Member={item} />
				))}
			</ul>

			{isMobile && (
				<nav className="ml-auto pt-4">
					<button
						className="px-4 py-4 h-full"
						ref={leftButtonRef}
						onClick={() => {
							console.log("left");
							console.log(carouselRef.current.scrollLeft);
							let scrollAmount =
								carouselRef.current.scrollLeft < 500
									? -1 * carouselRef.current.scrollLeft
									: -500;
							carouselRef.current.scrollBy({
								left: scrollAmount,
								behavior: "smooth",
							});
						}}
					>
						<img alt="Back Arrow" src={backArrow} />
					</button>

					<button
						className="px-4 py-4 h-full"
						ref={rightButtonRef}
						onClick={() => {
							console.log("right");
							let maxScrollLeft =
								carouselRef.current.scrollWidth -
								carouselRef.current.clientWidth -
								carouselRef.current.scrollLeft;
							let scrollAmount = maxScrollLeft < 500 ? maxScrollLeft : 500;
							console.log(maxScrollLeft);
							console.log(scrollAmount);
							carouselRef.current.scrollBy({
								left: scrollAmount,
								behavior: "smooth",
							});
						}}
					>
						<img alt="Forward Arrow" src={forwardArrow} />
					</button>
				</nav>
			)}
		</section>
	);
}
