import { FeedStateInterface } from './models';


function state(): FeedStateInterface {
    return {
        feed: [
            {
                id: 1,
                created: new Date("2022/09/05"),
                author: 'Kevin Kev',
                image: 'https://i.pinimg.com/736x/cf/43/b8/cf43b878556b0b640763f821ac219c0a.jpg',
                plantName: 'big panda plant',
                location: 'Chester Zoo',
                description: 'A post before all others',
            },
            {
                id: 2,
                created: new Date(),
                author: 'Monsieur Keith',
                image: 'https://i.pinimg.com/originals/ee/2e/4c/ee2e4c20b5343ca2b4066baf56db21ba.jpg',
                plantName: 'little panda plant',
                location: '',
                description: 'A post that was not quite first',
            },
            {
                id: 3,
                created: new Date("2022/10/01"),
                author: 'Senora Kim',
                image: 'https://s3.amazonaws.com/mygardenlife.com/plant-library/full/6795_25.jpg',
                plantName: 'Fire Plant Rip off',
                location: '',
                description: 'A plant that do be on fire',
            },
        ],
    }
}

export default state;
