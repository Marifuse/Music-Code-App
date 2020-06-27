const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)
const express = require('express'); //LIBRERIA NODE JS PARA CREAR SERVIDOR podemos definir las rutas(otro se llama happy server) 
const cors = require('cors')
const router = express();
router.use(cors({ origin: true }))

router.get("/courses", async (req, res) => {
  const course = await admin
    .firestore()
    .collection("course")
    .doc(req.params.id)
    .get().then((doc) =>{
      if (doc.exists){
        return { id: doc.id, data: doc.data() }
      } else {
        console.log ("No such document!");
        return{}
      }
    });
  res.send(course);
});

router.get("/courses", (req, res) => {
    const lista = [];
    const db = admin.firestore()
        db.collection("courses").get()
        .then(querySnapshot =>{
            let promises = []
            for (let course of querySnapshot.docs){
                lista.push({ id: course.id, data: course.data(), examples: [] 
})
        promises.push(course.ref.collection('examples').get())
            }
            return Promise.all(promises)
        })   
        .then(data => {
            lista.forEach((course, index) =>{
                let dataSource = data[index]
                dataSource.forEach(example =>{
                    course.examples.push({  id: example.id, data:
                        example.data()})
                })
            })
            res.send(lista);
        })
  });
  
  router.post("/course", async (req, res) => {
     const course = await admin
      .firestore()
      .collection("courses")
      .add(req.body)
      .then(docRef => {
          return docRef.id
      });
    res.send(course);
  });
  
  router.put("/course/:id", async (req, res) => {
    const course = await admin
      .firestore()
      .collection("courses")
      .doc(req.params.id)
      .update(req.body).then((doc) => {
          if (doc.exists) {              
            console.log("Document Data", document.data());
            return doc.data()
          } else {
            console.log("No such document!");
            return {}
          }
      });
    res.send(course);
  });
  router.delete("/course/:id", async (req, res) => {
    const course = await admin
      .firestore()
      .collection("courses")
      .doc(req.params.id)
      .delete();
    res.send(course);
  });
  
  exports.courses = functions.https.onRequest(router);
