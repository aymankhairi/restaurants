import React, { useState } from "react";
import "../../css/menu.css";
import PageTransition from "../../components/PageTransition";
import TruffleBurrata from "../../img/TruffleBurrata.webp";
import SearedScallops from "../../img/SearedScallops.webp";
import BeefCarpaccio from "../../img/BeefCarpaccio.webp";
import menuImg from "../../img/menu.webp";
import LobsterBisque from "../../img/LobsterBisque.webp";
import FoieGrasToast from "../../img/FoieGrasToast.webp";
import TunaTartare from "../../img/TunaTartare.webp";
import WildMushroomSoup from "../../img/WildMushroomSoup.webp";
import CrispyCalamari from "../../img/CrispyCalamari.webp";
import HerbCrustedSalmon from "../../img/HerbCrustedSalmon.webp";
import WagyuSteak from "../../img/WagyuSteak.webp";
import DuckConfit from "../../img/DuckConfit.webp";
import LobsterThermidor from "../../img/LobsterThermidor.webp";
import FiletMignon from "../../img/FiletMignon.webp";
import RisottoNero from "../../img/RisottoNero.webp";
import ChickenSupreme from "../../img/ChickenSupreme.webp";
import VegetableWellington from "../../img/VegetableWellington.webp";

import ChocolateSymphony from "../../img/ChocolateSymphony.webp";
import CremeBrulee from "../../img/CremeBrulee.webp";
import TiramisuElegance from "../../img/TiramisuElegance.webp";
import RaspberryCheesecake from "../../img/RaspberryCheesecake.webp";
import PannaCotta from "../../img/PannaCotta.webp";
import LavaCake from "../../img/LavaCake.webp";
import MangoSorbet from "../../img/MangoSorbet.webp";
import MacaronSelection from "../../img/MacaronSelection.webp";

import SignatureCocktail from "../../img/SignatureCocktail.webp";
import VintageRedWine from "../../img/VintageRedWine.webp";
import ChampagneRoyale from "../../img/ChampagneRoyale.webp";
import ArtisanEspresso from "../../img/ArtisanEspresso.webp";
import FreshMojito from "../../img/FreshMojito.webp";
import IcedMatchaLatte from "../../img/IcedMatchaLatte.webp";
import CraftBeer from "../../img/CraftBeer.webp";
import AgedWhiskey from "../../img/AgedWhiskey.webp";

function Menu() {
  const categories = [
    {
      title: "Starters",
      items: [
        {
          name: "Truffle Burrata",
          price: "$18",
          desc: "Creamy burrata, black truffle, olive oil & micro herbs",
          img: TruffleBurrata,
        },
        {
          name: "Seared Scallops",
          price: "$22",
          desc: "Pan-seared scallops with citrus beurre blanc",
          img: SearedScallops,
        },
        {
          name: "Beef Carpaccio",
          price: "$20",
          desc: "Thinly sliced beef, parmesan, rocket, truffle mayo",
          img: BeefCarpaccio,
        },
        {
          name: "Lobster Bisque",
          price: "$19",
          desc: "Creamy lobster soup with herbs & cognac touch",
          img: LobsterBisque,
        },
        {
          name: "Foie Gras Toast",
          price: "$26",
          desc: "Seared foie gras on brioche with fig jam",
          img: FoieGrasToast,
        },
        {
          name: "Tuna Tartare",
          price: "$24",
          desc: "Fresh tuna, avocado, sesame & citrus soy glaze",
          img: TunaTartare,
        },
        {
          name: "Wild Mushroom Soup",
          price: "$17",
          desc: "Earthy mushroom blend with cream foam",
          img: WildMushroomSoup,
        },
        {
          name: "Crispy Calamari",
          price: "$16",
          desc: "Lightly fried calamari with lemon aioli",
          img: CrispyCalamari,
        },
      ],
    },
    {
      title: "Main Course",
      items: [
        {
          name: "Herb Crusted Salmon",
          price: "$32",
          desc: "Atlantic salmon with seasonal vegetables",
          img: HerbCrustedSalmon,
        },

        {
          name: "Wagyu Steak",
          price: "$58",
          desc: "Premium Japanese wagyu with truffle glaze",
          img: WagyuSteak,
        },
        {
          name: "Duck Confit",
          price: "$38",
          desc: "Slow-cooked duck leg with berry reduction",
          img: DuckConfit,
        },
        {
          name: "Lobster Thermidor",
          price: "$65",
          desc: "Classic lobster baked in creamy cognac sauce",
          img: LobsterThermidor,
        },
        {
          name: "Filet Mignon",
          price: "$54",
          desc: "Tender beef filet with red wine reduction",
          img: FiletMignon,
        },
        {
          name: "Risotto Nero",
          price: "$29",
          desc: "Squid ink risotto with seafood medley",
          img: RisottoNero,
        },
        {
          name: "Chicken Supreme",
          price: "$28",
          desc: "Free-range chicken with herb butter sauce",
          img: ChickenSupreme,
        },
        {
          name: "Vegetable Wellington",
          price: "$26",
          desc: "Mushroom & spinach wrapped in puff pastry",
          img: VegetableWellington,
        },
      ],
    },
    {
      title: "Desserts",
      items: [
        {
          name: "Chocolate Symphony",
          price: "$14",
          desc: "Dark chocolate mousse with gold flakes",
          img: ChocolateSymphony,
        },

        {
          name: "Crème Brûlée",
          price: "$12",
          desc: "Vanilla custard with caramelized sugar crust",
          img: CremeBrulee,
        },
        {
          name: "Tiramisu Elegance",
          price: "$13",
          desc: "Classic Italian tiramisu with cocoa dust",
          img: TiramisuElegance,
        },
        {
          name: "Raspberry Cheesecake",
          price: "$15",
          desc: "Creamy cheesecake with raspberry glaze",
          img: RaspberryCheesecake,
        },
        {
          name: "Panna Cotta",
          price: "$12",
          desc: "Silky vanilla panna cotta with berry sauce",
          img: PannaCotta,
        },

        {
          name: "Lava Cake",
          price: "$14",
          desc: "Warm chocolate cake with molten center",
          img: LavaCake,
        },
        {
          name: "Mango Sorbet",
          price: "$10",
          desc: "Fresh tropical mango sorbet",
          img: MangoSorbet,
        },
        {
          name: "Macaron Selection",
          price: "$16",
          desc: "Assorted French macarons",
          img: MacaronSelection,
        },
      ],
    },
    {
      title: "Drinks",
      items: [
        {
          name: "Signature Cocktail",
          price: "$16",
          desc: "House-crafted citrus premium blend",
          img: SignatureCocktail,
        },
        {
          name: "Vintage Red Wine",
          price: "$24",
          desc: "Aged Bordeaux with oak depth",
          img: VintageRedWine,
        },
        {
          name: "Champagne Royale",
          price: "$30",
          desc: "Premium French champagne",
          img: ChampagneRoyale,
        },
        {
          name: "Artisan Espresso",
          price: "$8",
          desc: "Single-origin espresso with crema",
          img: ArtisanEspresso,
        },
        {
          name: "Fresh Mojito",
          price: "$14",
          desc: "Mint, lime & soda refreshment",
          img: FreshMojito,
        },

        {
          name: "Iced Matcha Latte",
          price: "$12",
          desc: "Premium Japanese matcha with milk",
          img: IcedMatchaLatte,
        },
        {
          name: "Craft Beer",
          price: "$10",
          desc: "Locally brewed artisan beer",
          img: CraftBeer,
        },
        {
          name: "Aged Whiskey",
          price: "$28",
          desc: "Smooth single malt whiskey",
          img: AgedWhiskey,
        },
      ],
    },
  ];
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <PageTransition>
      <div className="menu_page">
        {/* HERO */}
        <section
          className="menu_hero"
          style={{ backgroundImage: `url(${menuImg})` }}
        >
          <div className="menu_overlay" />
          <div className="menu_hero_content">
            <span className="menu_tag">Our Selection</span>
            <h1>Exquisite Menu</h1>
            <p>
              A curated collection of flavors crafted for a refined dining
              experience.
            </p>
          </div>
        </section>
        {/* menu_filters */}
        <div className="menu_filters">
          {["All", ...categories.map((cat) => cat.title)].map((category) => (
            <button
              key={category}
              className={`filter_btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        {/* MENU */}
        <section className="menu_section">
          {categories
            .filter(
              (cat) => activeCategory === "All" || cat.title === activeCategory,
            )
            .map((cat, i) => (
              <div className="menu_category" key={i}>
                <h2 className="menu_category_title">{cat.title}</h2>

                <div className="menu_items">
                  {cat.items.map((item, j) => (
                    <div className="menu_item" key={j}>
                      <div className="menu_item_content">
                        <div className="menu_item_top">
                          <h3>{item.name}</h3>
                          <span className="price">{item.price}</span>
                        </div>

                        <p className="menu_desc">{item.desc}</p>
                      </div>

                      {/* HOVER IMAGE */}
                      <div
                        className="menu_hover_image"
                        onClick={() => setSelectedImage(item.img)}
                      >
                        <img src={item.img} alt={item.name} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </section>
        {selectedImage && (
          <div
            className="image_modal_overlay"
            onClick={() => setSelectedImage(null)}
          >
            <div className="image_modal" onClick={(e) => e.stopPropagation()}>
              <button
                className="image_modal_close"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>

              <img src={selectedImage} alt="Dish Preview" />
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
}

export default Menu;
