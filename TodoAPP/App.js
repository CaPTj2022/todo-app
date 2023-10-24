import React, {useState}  from 'react';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/tasks'; 

export default function App() {
  const [task, setTask] = useState();  
  const [taskItems, setTaskItems] = useState([]); 

 const handleAddTask = () => {
  setTaskItems([...taskItems, task]) 
  setTask(null); 
 }

const completeTask = (index) => {
  let itemsCopy = [...taskItems]; 
  itemsCopy.splice(index, 1); 
  setTaskItems(itemsCopy); 

} 

  return (
    <View style={styles.container}>

      <View style={styles.tasksWrapper}>
       <Text style={styles.secionTitle}>"Alger" Today's Task</Text>

       {
        taskItems.map((item, index) => {
         return (
          <TouchableOpacity key={index} onPress={() => completeTask(index)}>
            <Task text={item}/>
            </TouchableOpacity>

         ) 
         
        })
       }

      <View style={styles.items}>
      
        </View>
    
    </View>


    <KeyboardAvoidingView
    behavior={Platform.os === "android" ? "padding" : "height"}
    style={styles.writeTaskWrapper}
    >
      <TextInput style={styles.input} placeholder={'Write a task'} value ={task} onChangeText={text => setTask(text)} />

      <TouchableOpacity onPress={() => handleAddTask()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text> 
          </View>
        </TouchableOpacity>
    </KeyboardAvoidingView>

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808080',
  },
  tasksWrapper: {
    paddingTop: 50,
    paddingHorizontal: 20, 
  },
  
  secionTitle: {
    fontSize: 50,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30, 

  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60, 
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 60,
    backgroundColor: '#FFF',
    borderColor: '#C0C0C0',
    borderWidth: 1, 
    width: 250,

  },
  addWrapper: {
    width: 60, 
    height: 60, 
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderBlockColor: 'C0C0C0',
    borderWidth: 1, 
    borderRadius: 60, 

  },
  addText: {},


});
