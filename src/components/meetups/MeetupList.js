import classes from './MeetupList.module.css'
import MeetupItem from './MeetupItem'
function MeetupList(props) {
    // for an object in meetups array, we render only one item
    return <ul className={classes.list}>
        {props.meetups.map(meetup =>
            <MeetupItem key={meetup.id} id={meetup.id} image={meetup.image} title={meetup.title} address={meetup.address} description={meetup.description}></MeetupItem>)}
    </ul>


}
export default MeetupList;