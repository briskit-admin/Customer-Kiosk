// Popup.js
import React, {useState} from 'react';
import { Modal, Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import colors from 'constants/colors';


const DiscountItem = ({code}) => {
  const [apply, setApply] = useState(true)

  const onApply = () => {
    setApply(false)
  }

  const onRemove = () => {
    setApply(true)
  }

  return (
    <View style={[styles.itemContainer, !apply && { backgroundColor: colors.lightGray}]}>
        <View style={styles.leftSection}>
          <Text style={styles.description}>Cancelled order for 12/12/2024</Text>
          <View style={{ flexDirection: 'row', gap: 20}}>
          <TouchableOpacity style={styles.code}>
            <Text style={styles.codeText}>{code}</Text>
          </TouchableOpacity>
          {!apply && 
              <View style={styles.tickIconWrapper}>
                <Image style={styles.tickIcon} source={require('images/tick.png')}/>
              </View>}
          </View>
        </View>
        {apply ? 
        <TouchableOpacity onPress={onApply} style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity> :
        <TouchableOpacity onPress={onRemove} style={styles.removeButton}>
          {/* <Image style={{ width: 20, height: 20 }}source={require('images/tick.png')}/>
          <Text style={styles.validateButtonText}>Validate</Text> */}
          <Text style={styles.remove}>Remove</Text>
        </TouchableOpacity>}
      </View>
  )}

const DiscountPopup = ({ isVisible, onClose }) => {
  const discountCodes = ['CANORD', 'FIRST', 'SPECIAL50']

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
      {discountCodes.map((code, index) => {
        return (
          <DiscountItem key={index} code={code} />
        )
      })}
        
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
  applyButtonText: {
    color: colors.theme,
    fontSize: 18,
    fontWeight: 'bold'
  },
  removeButton: {
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  remove: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold'
  },
  validateButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: colors.theme,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    height: 40,
    borderRadius: 4,
  },
  validateButtonText: {
    color: 'white',
    fontSize: 18,
  },
  tickIconWrapper: {
    backgroundColor: colors.theme,
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tickIcon: {
    width: 20,
    height: 20,
  }
});

export default DiscountPopup;
