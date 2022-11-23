import { reactive } from 'vue'

export const store = reactive({
    critics: {
        heading: {
            title: 'What The Critics Say',
            subtitle: 'Testimonials from around the world',
            button: 'Read All Testimonials'
        },
        main_card: {
            title: 'Best Author of His Generation',
            subtitle: 'This book will change your perspective on life',
            paragraphs: [
                {
                    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat voluptatibus ducimus quasi doloremque totam dicta tenetur enim quo veritatis! Iusto!'
                },
                {
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae est pariatur quibusdam! Minus quibusdam itaque blanditiis deleniti nostrum ab nulla.'
                }
            ],
            author: {
                img: 'nytimes-logo-white-xsmall.png',
                name: 'Justine Kilpatrick',
                company: 'The New York Times'

            }
        },
        cards: [
            {
                title: 'A True Masterpiece, Bravo!',
                content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, sunt maiores! Mollitia accusantium eligendi aliquam dolores eum officiis neque, incidunt sunt doloremque ex est, possimus in! Id voluptas a fuga facilis reprehenderit quidem odit, deleniti, culpa magni, quae ad eos explicabo doloribus sint libero at molestias ab asperiores voluptates reiciendis?',
                author: {
                    img: 'theguardian-xsmall.png',
                    name: 'Gerald Hendley',
                    company: 'The Guardian',
                }
            },
            {
                title: 'A Unique View On The World',
                content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, sunt maiores! Mollitia accusantium eligendi aliquam dolores eum officiis neque, incidunt sunt doloremque ex est, possimus in! Id voluptas a fuga facilis reprehenderit quidem odit, deleniti, culpa magni, quae ad eos explicabo doloribus sint libero at molestias ab asperiores voluptates reiciendis?',
                author: {
                    img: 'globe-xsmall.png',
                    name: 'Mary Maxey',
                    company: 'The Globe And Mail',
                }
            }
        ]
    },
    events: {
        heading: {
            title: 'Upcoming Events',
            subtitle: 'Meet The Author in Person'
        },
        cards: [
            {
                img: 'event-05-1200x719.jpg',
                title: 'Chicago Book Signing',
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, ex. Pariatur blanditiis perferendis vitae iure perspiciatis velit nisi similique sunt.'
            },
            {
                img: 'event-04-1200x719.jpg',
                title: 'Meet & Greet With Amanda',
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, ex. Pariatur blanditiis perferendis vitae iure perspiciatis velit nisi similique sunt.'
            },
            {
                img: 'event-07-1200x719.jpg',
                title: 'Open Book: Dialogues',
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, ex. Pariatur blanditiis perferendis vitae iure perspiciatis velit nisi similique sunt.'
            }
        ]
    },
    into_author: {
        heading: {
            title: 'Dig A Little Deeper Into Damon Vaughn',
            subtitle: 'Find out more about the author himself',
        },
        cards: [
            {
                img: 'box-1.jpg',
                title: 'About Me',
                subtitle: 'Lorem ipsum dolor sit amet.'
            },
            {
                img: 'box-4.jpg',
                title: 'My Latest Book',
                subtitle: 'Lorem ipsum dolor sit amet.'
            },
            {
                img: 'box-3.jpg',
                title: 'Book Signing',
                subtitle: 'Lorem ipsum dolor sit amet.'
            }
        ]
    },
    articles: {
        heading: {
            title: 'Recent Articles',
            subtitle: 'Read the latest entries',
            button: 'All Articles'
        },
        main_card: {
            img: '20-Tips-1200x706.jpg',
            title: '20 Creativity Tips',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae est pariatur quibusdam! Minus quibusdam itaque blanditiis deleniti nostrum ab nulla.',
            info: {
                author: 'admin',
                date: 'October 24th, 2019',
                categories: 'Event, Tips & Trick',
                comments: 0,
            }
        },

        cards: [
            {
                img: 'thumb-13-2x-700x441.jpg',
                title: 'What\'s On Your Booklist?',
                info: {
                    date: 'October 24th, 2019',
                    comments: 0,
                }
            },
            {
                img: 'thumb-08-2x-700x441.jpg',
                title: 'Istanbul Travel Guide',
                info: {
                    date: 'October 24th, 2019',
                    comments: 0,
                }
            },

        ]
    },
    getImageUrl(name) {
        return new URL(`./assets/img/${name}`, import.meta.url).href
    }
})