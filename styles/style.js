import { StyleSheet } from 'react-native';
import colors from './colors';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.dark,
    fontSize: 30,
    fontWeight: 'bold',
  },
  subTitle: {
    color: colors.darkGreen,
    fontSize: 30,
    fontWeight: 'bold'
  },
  containerApp:{
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerStyle: {
    flex: 1,
    backgroundColor: colors.lightDark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerHome: {
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: colors.lightDark4,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
  },
  text: {
    color: colors.lightBlue,
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center', 
    marginTop: 30,
    marginBottom:10,
    borderRadius: 5,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  imageHome: {
    width: 300,
    height: 300,
    alignSelf: 'center', 
    marginBottom:5,
    marginTop: 30,
  },
  strInstructions: {
    color: colors.dark,
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonDelivery: {
    width: '100%',
    marginTop: 20,
  },
  focus: {
    backgroundColor: colors.primary, 
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  card: {
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    width: '90%',
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});

export default styles;