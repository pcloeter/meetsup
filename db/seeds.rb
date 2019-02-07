# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Group.destroy_all
Membership.destroy_all


user1 = User.create!(
  name: "Ursula",
  password_digest: BCrypt::Password.create('hellothere'),
  email: 'ursula@gmail.com',
  session_token: "12345",
  created_at: "sometime",
  updated_at: "another time"
  )
  
  
user2 = User.create!(
  name: "Vader",
  password_digest: BCrypt::Password.create('hellothere'),
  email: 'darthv@gmail.com',
  session_token: "12345",
  created_at: "sometime",
  updated_at: "another time"
  )
    
user3 = User.create!(
  name: "Scar",
  password_digest: BCrypt::Password.create('hellothere'),
  email: 'scar@gmail.com',
  session_token: "12345",
  created_at: "sometime",
  updated_at: "another time"
)

user4 = User.create!(
  name: "Jafar",
  password_digest: BCrypt::Password.create('hellothere'),
  email: 'jafar@gmail.com',
  session_token: "12345",
  created_at: "sometime",
  updated_at: "another time"
)

user5 = User.create!(
  name: "Gaston",
  password_digest: BCrypt::Password.create('hellothere'),
  email: 'gaston@gmail.com',
  session_token: "12345",
  created_at: "sometime",
  updated_at: "another time"
)


group1 = Group.create!(
  name: "Ice cream eaters",
  description: "We just eat ice cream all day long. It's kind of gross, but kinda cool.  You probably at least low-key want to join our group.  Come on. Just do it.",
  city: "New York",
  organizer_id: user1.id,
  created_at: "sometime",
  updated_at: "another time"
)

group2 = Group.create!(
  name: "Goat runners",
  description: "We go running with goats cause they're like the best. Goats are super underestimated as running companions. 
  
  If you're in to fitness and goats-- this is the group for you.",
  city: "New York",
  organizer_id: user2.id,
  created_at: "sometime",
  updated_at: "another time"
)


group3 = Group.create!(
  name: "Meditating Maniacs",
  description: "A group for people who like really love to mediate. Maniacally, but in a zen kind of way.",
  city: "West New York",
  organizer_id: user3.id,
  created_at: "sometime",
  updated_at: "another time"
)

group4 = Group.create!(
  name: "Hudson Swimmers",
  description: "The hudson is the best place to swim. The currents are strong but the company is weak... I don't think I got that quite right... but come join us for a swim, regardless! Yay!",
  city: "Brooklyn",
  organizer_id: user2.id,
  created_at: "sometime",
  updated_at: "another time"
)

group5 = Group.create!(
  name: "Tours of Sewers",
  description: "Anybody who likes what's beneath the sidewalk or likes to see the ins and outs of their town's most humble and private infrastructure.",
  city: "Jersey City",
  organizer_id: user5.id,
)

Membership.create!(
  user_id: user3.id,
  group_id: group2.id
)

Membership.create!(
  member: user1,
  group: group1
  )

Membership.create!(
  user_id: user2.id,
  group_id: group2.id
)

Membership.create!(
  user_id: user1.id,
  group_id: group2.id
)

Membership.create!(
  user_id: user4.id,
  group_id: group2.id
)

Membership.create!(
  user_id: user5.id,
  group_id: group2.id
)

Membership.create!(
  user_id: user3.id,
  group_id: group3.id
)