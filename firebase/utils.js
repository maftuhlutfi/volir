import { async } from "@firebase/util"
import { collection, doc, documentId, getDoc, getDocs, limit, orderBy, query, where, updateDoc, setDoc, addDoc, FieldValue, increment, deleteDoc } from "firebase/firestore"
import { deleteObject, getDownloadURL, ref, uploadBytes, uploadBytesResumable } from "firebase/storage"
// import formatPostDate from "../utils/formatPostDate"
// import getIdFromPath from "../utils/getIdFromPath"
import { db, storage } from "./clientApp"

export const getUserData = async (authUser, cb) => {
    const docRef = doc(db, `/users/${authUser.uid}`)
    const docSnap = await getDoc(docRef)

    if (typeof cb == 'function') {
        await cb(docSnap.data())
    }
}