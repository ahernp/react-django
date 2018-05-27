import FeedreaderCounts from "./FeedreaderCounts";

const GROUPS = [{id: 0, name: 'Group One'}, {id: 1, name: 'Group Two'}];
const FEEDS = [{id: 0, title: 'Feed One', group_id: 0}, {id: 1, title: 'Feed Two', group_id: 1}];
const ENTRIES = [
    {id: 0, title: 'Entry One', feed_id: 0, read_flag: false},
    {id: 1, title: 'Entry Two', feed_id: 0, read_flag: false},
    {id: 2, title: 'Entry Three', feed_id: 1, read_flag: true},
    {id: 3, title: 'Entry Four', feed_id: 1, read_flag: true}
];

it('renders correctly, count all', () => {
    const wrapper = render(
        <FeedreaderCounts
            setFilterFeedId={() => {}}
            filterFeedId={undefined}
            showUnreadEntries={false}
            groups={GROUPS}
            feeds={FEEDS}
            entries={ENTRIES}
        />
    );

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly, count unread', () => {
    const wrapper = render(
        <FeedreaderCounts
            setFilterFeedId={() => {}}
            filterFeedId={undefined}
            showUnreadEntries={true}
            groups={GROUPS}
            feeds={FEEDS}
            entries={ENTRIES}
        />
    );

    expect(wrapper).toMatchSnapshot();
});
