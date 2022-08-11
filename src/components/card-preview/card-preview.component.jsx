import Card from '../card/card.component';

const CardPreview = () => {
  return (
    <div>
      <Card
        price={`2000`}
        terminal={`• LetzRent Premium Apparel (T-shirts & Coffee Mug) • Early access to new features & promotions`}
        pen={`Limited to the first 100`}
      />

      <Card
        price={`5000`}
        terminal={`• LetzRent Premium Apparel Box (T-shirts, Sweatshirts & additional Swag) | • Early access to new features & promotions`}
        pen={`TNC : Limited to the first 200`}
      />

      <Card
        price={'10000'}
        terminal={` • Exclusive interest in owning equity with an investment of
            ₹3,00,000 — ₹10,00,000 • One-on-one 30 minute video call with
            Co-Founders • Invite to exclusive LetzRent team chat • LetzRent
            Premium Apparel Box (T-shirts, Sweatshirts & additional Swag) •
            Early access to new features & promotions`}
        pen={`  TNC : Equity benefits with no voting rights. Limited to the first 5
            investors.`}
      />

      <Card
        price={`25000`}
        terminal={`• Exclusive interest in owning equity with an investment of ₹3,00,000 — ₹10,00,000 • One-on-one 30 minute video call with Co-Founders • Invite to exclusive LetzRent team chat • LetzRent Premium Apparel Box (T-shirts, Sweatshirts & additional Swag) • Early access to new features & promotions`}
        pen={`TNC : Equity benefits with no voting rights. Limited to the first 5 investors.`}
      />

      <Card
        price={`50000`}
        terminal={` Exclusive interest in owning equity with an investment of ₹11,00,000 — ₹30,00,000 • In-Person dinner with Co-Founder in Whitefield, Bangalore • One-on-one 30 minute video call with Co-Founders • Invite to exclusive LetzRent team chat • LetzRent Premium Apparel Box (T-shirts, Sweatshirts & additional Swag) • Early access to new features & promotions`}
        pen={`TNC : Equity benefits with voting rights. Limited to the first 5 investors.`}
      />

      <Card
        price={`100000`}
        terminal={`• Exclusive interest in owning equity with an investment of above ₹40,00,000 • LetzRent Weekend Experience: Flight & Hotel on us • In-Person dinner with Co-Founder in Whitefield, Bangalore • One-on-one 30 minute video call with Co-Founders • Invite to exclusive LetzRent team chat • LetzRent Premium Apparel Box (T-shirts, Sweatshirts & additional Swag) • Early access to new features & promotions`}
        pen={`TNC : Equity benefits with voting rights(open for discussion of term sheet). Limited to the first 2 investors.`}
      />
    </div>
  );
};

export default CardPreview;
