import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 48,
  },
  touchableOpacity: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  navItemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  line: {
    width: '100%',
    height: 2,
    backgroundColor: '#2C73D2',
    position: 'absolute',
    top: 0,
  },

});
export default styles;
