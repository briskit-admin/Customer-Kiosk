// Popup.js
import React from 'react';
import { Modal, Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import colors from 'constants/colors';

const DiscountPopup = ({ isVisible, onClose }) => {

  const DiscountItem = () => {
    return (
      <View style={styles.itemContainer}>
          <View style={styles.leftSection}>
            <Text style={styles.description}>Cancelled order for 12/12/2024</Text>
            <TouchableOpacity style={styles.code}>
              <Text style={styles.codeText}>CANORD</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.buttonText}>Apply</Text>
          </TouchableOpacity>
        </View>
    )}

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.fullScreenContainer}>
        <View style={styles.header}>
          <Text style={styles.heading}>Discounts</Text>
          <TouchableOpacity onPress={onClose}>
            <Image source={require('images/close.png')} style={styles.closeButton} />
          </TouchableOpacity>
        </View>
        <DiscountItem />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    marginTop: 22,
    paddingHorizontal: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  heading: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'black',
  },
  closeButton: {
    width: 42,
    height: 42,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
  },
  description: {
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
    marginBottom: 12,
  },
  code: {
    borderWidth: 1,
    borderColor: colors.theme,
    borderStyle: 'dashed',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  codeText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.theme,
  },
  applyButton: {
    borderWidth: 2,
    borderColor: colors.theme,
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  buttonText: {
    color: colors.theme,
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default DiscountPopup;
