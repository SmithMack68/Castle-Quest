require "test_helper"

class TripsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @trip = trips(:one)
  end

  test "should get index" do
    get trips_url, as: :json
    assert_response :success
  end

  test "should create trip" do
    assert_difference("Trip.count") do
      post trips_url, params: { trip: { castle_id: @trip.castle_id, hours: @trip.hours, places_to_eat: @trip.places_to_eat, route_travelled: @trip.route_travelled, things_to_do: @trip.things_to_do, user_id: @trip.user_id, username: @trip.username } }, as: :json
    end

    assert_response :created
  end

  test "should show trip" do
    get trip_url(@trip), as: :json
    assert_response :success
  end

  test "should update trip" do
    patch trip_url(@trip), params: { trip: { castle_id: @trip.castle_id, hours: @trip.hours, places_to_eat: @trip.places_to_eat, route_travelled: @trip.route_travelled, things_to_do: @trip.things_to_do, user_id: @trip.user_id, username: @trip.username } }, as: :json
    assert_response :success
  end

  test "should destroy trip" do
    assert_difference("Trip.count", -1) do
      delete trip_url(@trip), as: :json
    end

    assert_response :no_content
  end
end
