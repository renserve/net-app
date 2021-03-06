import TabBar from '../components/tabbar'
import IconList from '../components/iconlist'
// @ts-ignore
const iconData=[
    {icon:'StarOutlined',text:'1'},
    {icon:'LikeOutlined',text:'2'},
    {icon:'MessageOutlined',text:'3'},
]
export default function Tool() {
    function handleChange(e:number){
        console.log(e)
    }
    return (
        <main className="container">
            <style jsx>{`
                .row .col-lg-4 {
                   margin-bottom: 20px;
                }
            `}</style>
            <TabBar handleChange={handleChange}>
                <div className={`row`}>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="iconWrap">
                                    <img width={60} height={60}
                                         src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" alt=""/>
                                    <h5 className="card-title">Card title</h5>
                                </div>
                                <p className="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className={`card-footer bg-transparent iconFooter`}>
                                <IconList icons={iconData}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </TabBar>
        </main>
    )
}
