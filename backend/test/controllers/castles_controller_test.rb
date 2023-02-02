require "test_helper"

class CastlesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @castle = castles(:one)
  end

  test "should get index" do
    get castles_url, as: :json
    assert_response :success
  end

  test "should create castle" do
    assert_difference("Castle.count") do
      post castles_url, params: { castle: { hours_of_operation: @castle.hours_of_operation, image: @castle.image, location: @castle.location, name: @castle.name, short_description: @castle.short_description, user_id: @castle.user_id, website: @castle.website } }, as: :json
    end

    assert_response :created
  end

  test "should show castle" do
    get castle_url(@castle), as: :json
    assert_response :success
  end

  test "should update castle" do
    patch castle_url(@castle), params: { castle: { hours_of_operation: @castle.hours_of_operation, image: @castle.image, location: @castle.location, name: @castle.name, short_description: @castle.short_description, user_id: @castle.user_id, website: @castle.website } }, as: :json
    assert_response :success
  end

  test "should destroy castle" do
    assert_difference("Castle.count", -1) do
      delete castle_url(@castle), as: :json
    end

    assert_response :no_content
  end
end
