
export const stacks = [
    {
        stack: 'NextJs, React & React Native',
        type: 'frameworks', // databases, frameworks
        logs: [
            {
                title: 'NextJS Frontend Framework',
                description: 'A frontend framework that enables developers to build web applications with React by adding server-side rendering, static site generation, routing, data fetching, image optimization, and more.',
                href: 'https://nextjs.org/',
                experienceLevel: 'Professional',
                image: {
                    url: '/assets/nextjs.webp',
                    width: 500,
                    height: 500,
                    title: 'NextJs Logo',
                    description: 'NextJs Logo'
                }
            },
            {
                title: 'ReactJS Frontend Framework',
                description: 'A JavaScript library for building user interfaces. ',
                href: 'https://reactjs.org/',
                experienceLevel: 'Intermediate',
                image: {
                    url: '/assets/reactjs.png',
                    width: 500,
                    height: 500,
                    title: 'ReactJS Logo',
                    description: 'ReactJS Logo'
                }
            },
            {
                title: 'React Native Mobile Framework & Expo',
                description: 'A framework for building native applications using React. In the past we built the NexosSolutions App for Android and iOS with React Native.',
                href: 'https://reactnative.dev/',
                experienceLevel: 'Intermediate',
            }
        ]
    },
    {
        stack: 'Python',
        type: 'frameworks',
        logs: [
            {
                title: 'Python Language',
                description: 'Used for web scraping and data analysis in past projects. The University of Munich hired me for a project to scrape data from the web for their research and study purposes.',
                href: 'https://www.python.org/',
                experienceLevel: 'Basic',
            }
        ]
    },
    {
        stack: 'Golang',
        type: 'frameworks',
        logs: [
            {
                title: 'Golang Language',
                description: 'Extremely fast and efficient language. In some projects we used Golang for the backend to deliver the data to the frontend and to handle the API requests.',
                href: 'https://go.dev/',
                experienceLevel: 'Basic',
            }
        ]
    },
    {
        stack: 'Typescript',
        type: 'frameworks',
        logs: [
            {
                title: 'Typescript Language',
                description: 'Typesafety used in almost all projects. Typescript is a superset of JavaScript that adds type definitions to the language.',
                href: 'https://www.typescriptlang.org/',
                experienceLevel: 'Intermediate',
                image: {
                    url: '/assets/typescript.avif',
                    width: 500,
                    height: 500,
                    title: 'ReactJS Logo',
                    description: 'ReactJS Logo'
                }
            }
        ]
    },
    {
        stack: 'Javascript & NodeJS',
        type: 'frameworks',
        logs: [
            {
                title: 'Javscript Language',
                description: 'Used for web development and browser extensions in the past. NexosSolutions is a browser extension that automates the process of purchasing limited items. Based on web-requests it automated the process of selecting, purchasing and submitting the order.',
                href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
                experienceLevel: 'Professional',
            },
            {
                title: 'Chrome Extensions & Webpack',
                description: 'Used to deliver react chrome extensions for the browser such as automated buying software, scrapers and helpful tools.',
                experienceLevel: 'Intermediate',
            },
            {
                title: 'NodeJS Backend Framework',
                description: 'The backend framework for the NexosSolutions Extension and App. Our API is built with NodeJS and ExpressJS to deliver the data to the frontend.',
                href: 'https://nodejs.org/en',
                experienceLevel: 'Professional',
                image: {
                    url: '/assets/nodejs.jpeg',
                    width: 500,
                    height: 500,
                    title: 'NodeJS Logo',
                    description: 'NodeJS Logo'
                }
            }
        ]
    },
    {
        stack: 'MongoDB & PostgreSQL',
        type: 'databases',
        logs: [
            {
                title: 'MongoDB',
                description: 'A NoSQL database program, which uses JSON-like documents with optional schemas. Used for the NexosSolutions Extension and App to store user data and product information.',
                href: 'https://www.mongodb.com/',
                experienceLevel: 'Intermediate',
                image: {
                    url: '/assets/mongodb.webp',
                    width: 500,
                    height: 500,
                    title: 'MongoDB Logo',
                    description: 'MongoDB Logo'
                }
            },
            {
                title: 'PostgreSQL',
                description: 'A powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.',
                href: 'https://www.postgresql.org/',
                experienceLevel: 'Intermediate',
                image: {
                    url: '/assets/postgres-logo.png',
                    width: 500,
                    height: 500,
                    title: 'PostgreSQL Logo',
                    description: 'PostgreSQL Logo'
                }
            },
        ]
    },
    {
        stack: 'SDKs',
        type: 'sdk',
        logs: [
            {
                title: 'Stripe',
                description: 'A payment processing platform that allows you to accept payments online. Used for the ProfitPath Software to process payments & enable flexible payment options for our users.',
                href: 'https://stripe.com/de',
                experienceLevel: 'Professional',
                image: {
                    url: '/assets/stripe.png',
                    width: 500,
                    height: 500,
                    title: 'Stripe Logo',
                    description: 'Stripe Logo'
                }
            },
            {
                title: 'Supabase',
                description: 'A PostgreSQL-compatible database that is fully open-source and provides a comprehensive set of features for building modern applications.',
                href: 'https://supabase.com/',
                experienceLevel: 'Professional',
                image: {
                    url: '/assets/supabase.png',
                    width: 500,
                    height: 500,
                    title: 'Supabase Logo',
                    description: 'Supabase Logo'
                }
            },
            {
                title: 'ORPC Client & Server',
                description: 'ORPC is Typescript library designed to make building end-to-end typesafe APIs effortless. It seamlessly integrates with Nextjs Server Actions & tanstack query, and that is the reason we use it in our projects.',
                href: 'https://github.com/unnoq/orpc',
                experienceLevel: "Beginner",
                image: {
                    url: '/assets/orpc.png',
                    width: 500,
                    height: 500,
                    title: 'ORPC Logo',
                    description: 'ORPC Logo'
                }
            },
            {
                title: 'Tanstack',
                description: 'An SDK that puts developer experience first & manages routes, data fetching, forms & tables inside profitpath. We use Tanstack Query to fetch data from our database and Tanstack Table to display the data in a table.',
                href: 'https://tanstack.com/',
                experienceLevel: 'Intermediate',
                image: {
                    url: '/assets/tanstack.png',
                    width: 500,
                    height: 500,
                    title: 'Tanstack Logo',
                    description: 'Tanstack Logo'
                }
            }
        ]
    }
]