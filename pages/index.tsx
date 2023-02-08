import { IProduct } from "boundless-api-client";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import ProductsList from "../components/ProductsList";
import MainLayout from "../layouts/Main";
import { apiClient } from "../lib/api";
import { makeAllMenus } from "../lib/menu";
// import VerticalMenu from '../components/VerticalMenu';
import { IMenuItem } from "../@types/components";
import SwiperSlider from "../components/SwiperSlider";
import mobileSlider1Img from "../assets/mobile-slider-1.png";
import mobileSlider2Img from "../assets/mobile-slider-2.png";
// import CoverTextInCenter from '../components/CoverTextInCenter';
// import bgImg from '../assets/cover-bg.jpeg';
// import bgPortraitImg from '../assets/cover-bg-portrait.jpg';
import ProductsSliderByQuery from "../components/ProductsSliderByQuery";
import TextWithIcons from "../components/TextWithIcons";
import { faBug } from "@fortawesome/free-solid-svg-icons/faBug";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons/faShieldAlt";
import { faSmile } from "@fortawesome/free-solid-svg-icons/faSmile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Reviews from "../components/Reviews";

import Banner1 from "../assets/banner1.jpg";
import Banner2 from "../assets/banner2.jpg";

export default function IndexPage({
	products,
	mainMenu,
	footerMenu,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<MainLayout mainMenu={mainMenu} footerMenu={footerMenu}>
			<div className="container-xxl">
				<MainPageSlider />
				<h1 className="page-heading page-heading_h1  page-heading_m-h1">
					Sizeplus Apparel Pvt Ltd
				</h1>
				<ProductsList
					products={products}
					className={"page-block"}
					itemClassName={"products__item_4-in-row"}
				/>
			</div>
			<TextWithIcons
				columns={[
					{
						icon: (
							<FontAwesomeIcon
								icon={faBug}
								className={"text-with-icons__icon"}
							/>
						),
						title: "Does not slip in the hands",
						comment: "Anti-slip coating - for reliability.",
					},
					{
						icon: (
							<FontAwesomeIcon
								icon={faShieldAlt}
								className={"text-with-icons__icon"}
							/>
						),
						title: "Extra phone protection",
						comment: "Anti-slip coating - for reliability.",
					},
					{
						icon: (
							<FontAwesomeIcon
								icon={faSmile}
								className={"text-with-icons__icon"}
							/>
						),
						title: "Looks nice",
						comment: "With our cases your phone look even better than without.",
					},
				]}
				fullWidth={true}
				className={"page-block"}
			/>
			<div className="container-xxl">
				<ProductsSliderByQuery
					query={{ collection: ["main-page"], sort: "in_collection" }}
					title={"Special offers:"}
					wrapperClassName="page-block"
				/>
			</div>
		</MainLayout>
	);
}

export const getServerSideProps: GetServerSideProps<
	IIndexPageProps
> = async () => {
	const categoryTree = await apiClient.catalog.getCategoryTree({
		menu: "category",
	});
	const { products } = await apiClient.catalog.getProducts({
		collection: ["main-page"],
		sort: "in_collection",
	});

	const menus = makeAllMenus({ categoryTree });

	return {
		props: {
			products,
			...menus,
		},
	};
};

interface IIndexPageProps {
	products: IProduct[];
	mainMenu: IMenuItem[];
	footerMenu: IMenuItem[];
}

function MainPageSlider() {
	const slides = [
		{
			img: Banner1.src,
			link: "",
			caption: "We have all the uniforms",
			captionPosition: "bottom",
			useFilling: true,
			fillingColor: "#000000",
			fillingOpacity: 0.4,
		},
		{
			img: Banner2.src,
			link: "",
			caption: "Variety of uniforms",
			captionPosition: "bottom",
			useFilling: true,
			fillingColor: "#000000",
			fillingOpacity: 0.4,
		},
	];

	return (
		<SwiperSlider
			showPrevNext
			// pagination='progressbar'
			size={"large"}
			slides={slides}
			className={"mb-4"}
		/>
	);
}
