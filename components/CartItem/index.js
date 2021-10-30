import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  faCog,
  faToolbox,
  faFan,
  faKey,
  faLock,
  faUnlockAlt,
} from '@fortawesome/free-solid-svg-icons';
import Menu from '../Menu';

const index = () => {
  const [locked, setLocked] = useState(true);

  const clickLockBtn = () => {
    if (locked) {
      setLocked(false);
    } else {
      setLocked(true);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/background.png')}
        style={styles.backgroundImage}
      />

      {/* Header */}
      <View style={styles.header}>
        <FontAwesomeIcon icon={faCog} style={styles.icon} size={24} />
        <Text style={styles.headerTitle}> Tesla Model </Text>

        <FontAwesomeIcon icon={faToolbox} style={styles.icon} size={24} />
      </View>

      {/* battery */}

      <View style={styles.batterySec}>
        <Image
          source={require('../../assets/battery.png')}
          style={styles.batteryImage}
        />
        <Text style={styles.batteryTxt}>150 mi</Text>
      </View>

      {/* Status */}
      <View style={styles.status}>
        <Text style={styles.statusText}>Parked</Text>
      </View>

      {/* control section */}

      <ScrollView>
        <View style={styles.controls}>
          <TouchableOpacity>
            <View style={styles.controlsBtn}>
              <FontAwesomeIcon icon={faFan} style={styles.icon} size={24} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.controlsBtn}>
              <FontAwesomeIcon icon={faKey} style={styles.icon} size={24} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => clickLockBtn()}>
            <View style={styles.controlsBtn}>
              <FontAwesomeIcon
                icon={locked ? faLock : faUnlockAlt}
                style={styles.icon}
                size={24}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* Menu */}

        <Menu />
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    marginHorizontal: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  icon: {
    color: 'white',
  },
  batterySec: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  batteryImage: {
    height: 26,
    width: 70,
    marginRight: 10,
  },
  batteryTxt: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  status: {
    alignItems: 'center',
  },
  statusText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 175,
  },
  controlsBtn: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
    padding: 10,
    marginLeft: 25,
  },
});
