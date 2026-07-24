const menu = [
  {
    name: "Norfolk Dog",
    note: "All the way — mustard, chilli & onions",
    price: "$4.00",
  },
  { name: "All Beef Dog", note: "A classic, done right", price: "$4.00" },
  { name: "Italian Hots", note: "Hot sausage", price: "$5.00" },
  { name: "Chips", note: "The crispy sidekick", price: "$1.50" },
  { name: "Bottled Sodas", note: "Ice cold", price: "$1.75" },
  { name: "Bottled Water", note: "Cold & refreshing", price: "$1.00" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Hoggs Dogs home">
          <img src="/assets/hoggs-dogs-logo.png" alt="Hoggs Dogs" />
        </a>
        <nav aria-label="Main navigation">
          <a href="#menu">Menu</a>
          <a href="#truck">Our Truck</a>
          <a className="phone-pill" href="tel:+17573735348">
            Call 757-373-5348
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span>Fresh off the grill</span>
          </p>
          <h1>
            Good dogs.
            <br />
            <em>Great times.</em>
          </h1>
          <p className="hero-lede">
            Classic hot dogs, hearty chilli, and big Norfolk flavor—served
            fresh from our family-run food truck.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#menu">
              See the menu
            </a>
            <a className="button button-secondary" href="tel:+17573735348">
              Call the truck
            </a>
          </div>
          <div className="signature-strip">
            <span className="star">★</span>
            <span>
              Try the <strong>Norfolk Dog</strong>
            </span>
            <span>Mustard • Chilli • Onions</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="photo-frame">
            <img
              src="/assets/hoggs-dogs-truck-side.png"
              alt="The Hoggs Dogs food truck with its serving window open"
            />
          </div>
          <div className="price-burst" aria-label="Hot dogs from four dollars">
            <span>Dogs from</span>
            <strong>$4</strong>
          </div>
          <p className="photo-caption">Look for the pig. Follow the flavor.</p>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <span>HOT DOGS</span><b>★</b><span>CHILLI</span><b>★</b>
        <span>GOOD EATS</span><b>★</b><span>NORFOLK STYLE</span><b>★</b>
      </div>

      <section className="menu-section" id="menu">
        <div className="section-heading">
          <p className="eyebrow dark"><span>Step right up</span></p>
          <h2>The good stuff</h2>
          <p>Simple favorites, fair prices, no funny business.</p>
        </div>

        <div className="menu-layout">
          <div className="menu-card">
            <div className="menu-card-head">
              <h3>From the window</h3>
              <span>Made fresh</span>
            </div>
            <div className="menu-list">
              {menu.map((item) => (
                <div className="menu-item" key={item.name}>
                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.note}</p>
                  </div>
                  <span className="dots" aria-hidden="true" />
                  <strong>{item.price}</strong>
                </div>
              ))}
            </div>
          </div>

          <aside className="combo-card">
            <p className="stamp">Best deal on wheels</p>
            <div className="combo-number">2</div>
            <h3>Hot Dog Combo</h3>
            <p>Two hot dogs + chips + a bottled soda</p>
            <strong className="combo-price">$11.00</strong>
            <span className="combo-rule" />
            <p className="tiny">One hungry customer. One easy decision.</p>
          </aside>
        </div>

        <div className="toppings">
          <strong>Top it your way</strong>
          <span>Chilli</span>
          <span>Onions</span>
          <span>Mustard</span>
          <span>Ketchup</span>
        </div>
      </section>

      <section className="truck-section" id="truck">
        <div className="truck-gallery">
          <div className="truck-photo truck-photo-main">
            <img
              src="/assets/hoggs-dogs-truck-back.jpeg"
              alt="Back of the Hoggs Dogs food truck"
            />
          </div>
          <div className="truck-logo-badge">
            <img src="/assets/hoggs-dogs-logo.png" alt="" />
          </div>
        </div>
        <div className="truck-copy">
          <p className="eyebrow"><span>Family run • Norfolk proud</span></p>
          <h2>Big flavor from a little window.</h2>
          <p>
            Hoggs Dogs is a new family food truck serving the classics the way
            they should be: hot, fresh, and loaded with your favorite toppings.
            Whether you go all the way with a Norfolk Dog or keep it classic,
            we&apos;re ready to make you something good.
          </p>
          <div className="callout">
            <span>Booking or event questions?</span>
            <a href="tel:+17573735348">757-373-5348</a>
          </div>
        </div>
      </section>

      <footer>
        <img src="/assets/hoggs-dogs-logo.png" alt="Hoggs Dogs" />
        <div>
          <p>Hot dogs • Chilli • And more!</p>
          <span>Est. 2026</span>
        </div>
        <a href="tel:+17573735348">757-373-5348</a>
      </footer>
    </main>
  );
}
