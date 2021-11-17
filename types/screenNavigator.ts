import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as Contacts from 'expo-contacts'


export type RootStackParamList = {
  // Home: undefined;
  // Profile: { userId: string };
  // Feed: { sort: 'latest' | 'top' } | undefined;
  Empty: undefined;
  Contacts: Contacts.Contact[] | undefined;
  LifeCalendarIntro: undefined;
  Gender: undefined;
  DoB: { gender: string } | undefined;
  LifeExpectancy: undefined;
  LifeCalendar: undefined;
  LifeCalendarTwo: undefined;
  LifeCalendarThree: undefined;
  Schedule: undefined;
  ScheduleCalendar: undefined;
  Profile: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;