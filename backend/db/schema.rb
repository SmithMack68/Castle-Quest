# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_02_10_045238) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "castles", force: :cascade do |t|
    t.string "name"
    t.string "image_url"
    t.string "location"
    t.text "short_description"
    t.string "hours_of_operation"
    t.string "website"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.string "username"
    t.text "comment"
    t.bigint "castle_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["castle_id"], name: "index_reviews_on_castle_id"
  end

  create_table "trips", force: :cascade do |t|
    t.string "username"
    t.text "route_travelled"
    t.integer "hours"
    t.text "things_to_do"
    t.text "places_to_eat"
    t.bigint "user_id", null: false
    t.bigint "castle_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["castle_id"], name: "index_trips_on_castle_id"
    t.index ["user_id"], name: "index_trips_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "country"
    t.string "password_digest"
    t.string "username"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "reviews", "castles"
  add_foreign_key "trips", "castles"
  add_foreign_key "trips", "users"
end
