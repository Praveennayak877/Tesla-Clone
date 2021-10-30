import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import items from './items';

const Menu = () => {
  return (
    <View style={styles.menuItem}>
      {items.map((item, index) => {
        return (
          <TouchableOpacity key={item.id}>
            <View style={styles.menuRow}>
              <FontAwesomeIcon icon={item.icon} style={styles.icon} size={24} />

              <View style={styles.menuTxtBox}>
                <Text style={styles.menuText}>{item.title}</Text>
                {item.subTitle && (
                  <Text style={styles.subTitleTxt}>{item.subTitle}</Text>
                )}
              </View>
              <FontAwesomeIcon
                icon={faChevronRight}
                style={styles.arrowIcon}
                size={24}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menuItem: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  icon: {
    color: 'white',
  },
  menuTxtBox: {
    flexGrow: 1,
  },
  menuText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 15,
    textTransform: 'uppercase',
  },
  menuRow: {
    flexDirection: 'row',
    marginBottom: 15,
    marginTop: 15,
    alignItems: 'center',
  },
  subTitleTxt: {
    color: 'grey',
    fontSize: 14,
    marginLeft: 15,
  },
  arrowIcon: {
    color: '#4d4d4e',
  },
});
