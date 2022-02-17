import ContainerCarouselCategory from "../components/ContainerCarouselCategory";
import '../../styles/pages/Home.css';
import ArrayCategory from "../utils/ArrayCategory";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { db } from '../firebase';
import { useState, useEffect } from 'react';



export default function Home() {

    const [prod, setProd] = useState([])

    useEffect(() => {
        const q = query(collection(db, 'producto'))
        onSnapshot(q, (querySnapshot) => {
            setProd(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])




    const objeto1 = [
        {
            category: 'Remeras'
        },
        {
            category: 'Buzo'
        },
        {
            category: 'Jean'
        },
        {
            category: 'Accesorio'
        }
    ]

    console.log(
        ArrayCategory, objeto1
    )

    const storage = getStorage();
    const gsReference = ref(storage, 'gs://nikshop-1a5d6.appspot.com/buzo.jpg');
    console.log(gsReference)

    return (
        <main className="mainContainer">
            {objeto1.map(item =>
                <ContainerCarouselCategory category={item.category} />
            )}
            {prod.map((item) => (
                <p>
                    {item.data.name}
                    Hola
                </p>
            ))}
            <img id="myimg"></img>
        </main>
    )
}