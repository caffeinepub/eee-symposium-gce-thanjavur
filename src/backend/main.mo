import Map "mo:core/Map";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Iter "mo:core/Iter";

actor {
  type Event = {
    name : Text;
    date : Text;
    venue : Text;
    description : Text;
  };

  type ScheduleItem = {
    time : Text;
    title : Text;
    speaker : Text;
    location : Text;
  };

  type Speaker = {
    name : Text;
    designation : Text;
    affiliation : Text;
    topic : Text;
  };

  type RegistrationFee = {
    category : Text;
    amount : Nat;
  };

  module RegistrationFee {
    public func compare(fee1 : RegistrationFee, fee2 : RegistrationFee) : Order.Order {
      switch (Text.compare(fee1.category, fee2.category)) {
        case (#equal) { Nat.compare(fee1.amount, fee2.amount) };
        case (order) { order };
      };
    };
  };

  let events = Map.singleton<Text, Event>(
    "EEE Symposium 2024",
    {
      name = "EEE Symposium 2024";
      date = "2024-08-15";
      venue = "Government College of Engineering, Thanjavur";
      description = "A national level technical symposium organized by the EEE department.";
    },
  );

  let schedule = Map.fromIter<Text, ScheduleItem>(
    [
      (
        "09:00",
        {
          time = "09:00";
          title = "Inauguration";
          speaker = "Dr. S. Kumar";
          location = "Auditorium";
        },
      ),
      (
        "10:00",
        {
          time = "10:00";
          title = "Keynote: Future of Energy";
          speaker = "Dr. R. Sharma";
          location = "Conference Hall";
        },
      ),
      (
        "11:30",
        {
          time = "11:30";
          title = "Technical Paper Presentation";
          speaker = "Various";
          location = "Seminar Hall";
        },
      ),
      (
        "14:00",
        {
          time = "14:00";
          title = "Workshop: Robotics";
          speaker = "Mr. A. Nair";
          location = "Lab 3";
        },
      ),
    ].values(),
  );

  let speakers = Map.fromIter<Text, Speaker>(
    [
      (
        "Dr. S. Kumar",
        {
          name = "Dr. S. Kumar";
          designation = "Head of EEE Dept.";
          affiliation = "GCE Thanjavur";
          topic = "Inauguration";
        },
      ),
      (
        "Dr. R. Sharma",
        {
          name = "Dr. R. Sharma";
          designation = "Professor";
          affiliation = "IIT Madras";
          topic = "Future of Energy";
        },
      ),
      (
        "Mr. A. Nair",
        {
          name = "Mr. A. Nair";
          designation = "Research Engineer";
          affiliation = "Robotics India";
          topic = "Robotics Workshop";
        },
      ),
    ].values(),
  );

  let fees = Map.fromIter<Text, RegistrationFee>(
    [
      (
        "student",
        {
          category = "student";
          amount = 100;
        },
      ),
      (
        "faculty",
        {
          category = "faculty";
          amount = 200;
        },
      ),
      (
        "industry",
        {
          category = "industry";
          amount = 300;
        },
      ),
    ].values(),
  );

  public query ({ caller }) func getEvent(name : Text) : async Event {
    switch (events.get(name)) {
      case (null) { { name = ""; date = ""; venue = ""; description = "" } };
      case (?event) { event };
    };
  };

  public query ({ caller }) func getAllEvents() : async [Event] {
    events.values().toArray();
  };

  public query ({ caller }) func getSchedule() : async [ScheduleItem] {
    schedule.values().toArray();
  };

  public query ({ caller }) func getSpeakers() : async [Speaker] {
    speakers.values().toArray();
  };

  public query ({ caller }) func getFees() : async [RegistrationFee] {
    fees.values().toArray().sort();
  };
};
