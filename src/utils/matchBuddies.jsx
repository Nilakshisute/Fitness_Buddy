import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

// Match buddies based on similar fitness goals & preferences
export const matchBuddies = async (currentProfile) => {
  const profilesRef = collection(db, "profiles");
  const snapshot = await getDocs(profilesRef);

  const matchedBuddies = [];
  snapshot.forEach((doc) => {
    const buddy = doc.data();
    if (
      buddy.goals === currentProfile.goals &&
      buddy.name !== currentProfile.name
    ) {
      matchedBuddies.push({
        id: doc.id,
        ...buddy,
      });
    }
  });
  return matchedBuddies;
};
