import type { INewsProvider } from '../../core/interfaces/INewsProvider';

export class FakeNewsProvider implements INewsProvider {
  async getLastestNews() {
    return [
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Luc Olinga",
            "title": "Bitcoin Is Lost In Washington, and Nobody Is Looking for It",
            "content": "Congress just passed its biggest crypto law ever, and Bitcoin didn’t even get a mention. Once the face of financial rebellion, it’s now sidelined while stablecoins take the spotlight.",
            "url": "https://gizmodo.com/app/uploads/2023/04/16e5700ae24064ff50deef40ec83875d.jpg",
            "publishedAt": "2025-07-19T12:48:58Z",
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "cji@businessinsider.com (Christine Ji)",
            "title": "Scams, forgotten passwords, and lost fortunes: Meet the digital locksmith who helps people get their bitcoin back",
            "content": "Bitcoin is surging, and so are lost wallets and crypto scams. Behind the scenes with a crypto recovery professional.",
            "url": "https://i.insider.com/6883be3385e81483682eb3dc?width=1200&format=jpeg",
            "publishedAt": "2025-07-26T09:30:01Z",
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Matt Novak",
            "title": "El Salvador’s Crypto President Could Stay in Power for Decades After Changes to Constitution",
            "content": "Trump's buddy in Central America may become a dictator for life.",
            "url": "https://gizmodo.com/app/uploads/2025/08/nayib-bukele-and-donald-trump-april-14-2025-1200x675.jpg",
            "publishedAt": "2025-08-01T18:50:12Z",
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "litaliano@insider.com (Laura Italiano)",
            "title": "Men accused of waterboarding a bitcoin millionaire for his password will ask on Wednesday to be freed on bail",
            "content": "Crypto investors William Duplessie and John Woeltz ask for bail Wednesday. They're accused of kidnapping and torturing a bitcoin millionaire in NYC.",
            "url": "https://i.insider.com/687fcfcbf748d8c055f60f75?width=1200&format=jpeg",
            "publishedAt": "2025-07-23T09:00:01Z",
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Khyathi Dalal",
            "title": "Bitcoin Advocate Says BTC Will Emulate 2021 Dogecoin Run: 'This Thesis Will Retire Your Bloodline'",
            "content": "Bitcoin advocate Udi Wertheimer has made the case that Bitcoin (CRYPTO: BTC) is entering an explosive bull run, akin to what happened with Dogecoin (CRYPTO: ...",
            "url": "https://media.zenfs.com/en/benzinga_79/9023968dd7e5437728580543d9c49757",
            "publishedAt": "2025-07-17T02:30:24Z",
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "EditorDavid",
            "title": "Bitcoin Hits an All-Time High of $118,000, Up 21% for 2025",
            "content": "Bitcoin \"vaulted to a fresh all-time high Friday, breaking above $118,000,\" reports Yahoo Finance:\n\nYear to date, the token is up roughly 21%, buoyed in part by crypto-friendly policies from the Trump administration, including the establishment of a strategic…",
            "url": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
            "publishedAt": "2025-07-12T16:34:00Z",
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Emma Roth",
            "title": "Apple’s 5th Ave store spray-painted to protest ‘climate hypocrisy’",
            "content": "A climate change activist was arrested after spray-painting Apple’s 5th Avenue store as part of a protest against Big Tech’s “climate hypocrisy.” Protestors from the Extinction Rebellion environmental group staged a demonstration at the New York City storefro…",
            "url": "https://platform.theverge.com/wp-content/uploads/sites/2/2025/07/climate-protest.jpg?quality=90&strip=all&crop=0%2C10.736179071137%2C100%2C78.527641857725&w=1200",
            "publishedAt": "2025-07-07T14:11:57Z",
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "tmohamed@businessinsider.com (Theron Mohamed)",
            "title": "'Black Swan' author Nassim Taleb tells BI he agrees with Elon Musk on debt, saying a 'crisis' is looming",
            "content": "Author Nassim Nicholas Taleb said the interest on the US debt is a huge burden, and called out Trump's tariffs and the dollar's decline.",
            "url": "https://i.insider.com/687762253d5881a51c1d680d?width=1145&format=jpeg",
            "publishedAt": "2025-07-16T15:04:51Z",
        },
        {
            "source": {
                "id": null,
                "name": "TheStreet"
            },
            "author": "Anushka Basu",
            "title": "Bitcoin smashes record high but greed remains in check",
            "content": "Bitcoin surpasses $118K as whales stay quiet and exchange inflows fall to decade lows, signaling low pressure.",
            "url": "https://media.zenfs.com/en/thestreet_881/8cbce858c702e964517d4062d7e465c9",
            "publishedAt": "2025-07-11T20:31:38Z",
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Angelica Ballesteros",
            "title": "Joby Aviation (JOBY) Extends Gains on 3rd Day Ahead of Q2; Investors Cheer Expansion Plans",
            "content": "We recently published 10 Stocks Exploding Higher: Bitcoin Miners Dominate the List. Joby Aviation, Inc. (NYSE:JOBY) is one of Wednesday’s top performers...",
            "url": "https://s.yimg.com/ny/api/res/1.2/jAL69cakL0Ui0tXTSqTsHA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzM-/https://media.zenfs.com/en/insidermonkey.com/878334afeee892d4ca704f06bc19de29",
            "publishedAt": "2025-07-17T19:55:27Z",
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Bruce Gil",
            "title": "Crypto Payments Are Coming to PayPal",
            "content": "The digital payments platform is getting over 100 other cryptocurrencies as a payment option.",
            "url": "https://gizmodo.com/app/uploads/2022/10/d8c36962f4ab48bc3aef0de0c84e1d23.jpg",
            "publishedAt": "2025-07-28T17:40:27Z",
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Julie Hyman",
            "title": "Bitcoin outlook: What comes next after 'institutional adoption'",
            "content": "Bitcoin's (BTC-USD) \"institutional adoption\" is growing as financial tools make cryptocurrency more usable. Chris Kline, BitcoinIRA COO and co-founder, joins...",
            "url": "https://s.yimg.com/ny/api/res/1.2/lAkStoK29vMo98KZ6gBIUA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2025-07/845ea880-5b51-11f0-9fe9-bdfa33bab0d1",
            "publishedAt": "2025-07-08T11:00:00Z",
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "David Pan",
            "title": "Saylor’s New $4.2 Billion Bitcoin Plan Aims to Reassure Skeptics",
            "content": "(Bloomberg) -- Michael Saylor isn’t backing down. The Strategy co-founder is preparing to sell $4.2 billion more in preferred stock to fuel his latest...",
            "url": "https://s.yimg.com/ny/api/res/1.2/4B7qXUZCJn5jA4AJKb2yDQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDM-/https://media.zenfs.com/en/bloomberg_holding_pen_162/ad2a1b46aa439a2f9288ed5da96e054d",
            "publishedAt": "2025-07-31T22:38:32Z",
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Lucas Ropek",
            "title": "Attention Patriots, You Can Help Pay Off the National Debt by Venmo-ing ‘Gifts’ to the Feds",
            "content": "At a time when the country is spending more than ever, there's a hero coming to save us: you and your Venmo wallet.",
            "url": "https://gizmodo.com/app/uploads/2025/07/GettyImages-2226860627-1200x675.jpg",
            "publishedAt": "2025-07-25T13:10:48Z",
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Antonio Vallejo",
            "title": "Bitcoin alcanza un máximo histórico superando los 118.000 dólares. Un rally alcista impulsado por el abrazo de las instituciones",
            "content": "El bitcoin ha marcado un nuevo récord histórico al alcanzar los 118.661,10 dólares durante este viernes. El criptooptimismo sigue en alza en un contexto político y económico cambiante y con una mirada siempre presente a la política arancelaria de Donald Trump…",
            "url": "https://i.blogs.es/e6e691/erling-loken-andersen-i9_3d7o86b8-unsplash/840_560.jpeg",
            "publishedAt": "2025-07-11T15:16:51Z",
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Javier Pastor",
            "title": "En 2011 alguien compró 80.000 bitcoins a precio de saldo. Acaba de venderlos y su beneficio ha sido del 17.000.000%",
            "content": "\"HODL\" es la palabra preferida de los criptocreyentes. No es un acrónimo, sino una especie de meme o broma interna que simplemente es una variación del verbo inglés \"hold\" (mantener, aguantar). Ese término encierra buena parte de la filosofía de estos usuario…",
            "url": "https://i.blogs.es/702314/btc/840_560.jpeg",
            "publishedAt": "2025-07-31T09:30:37Z",
        },
        
    ]
  }
}