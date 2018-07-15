<template>
    <div class="page-home">
        <div class="container container-main">
            <mu-stepper :active-step="activeStep">
                <mu-step>
                    <mu-step-label>
                        签订协议
                    </mu-step-label>
                </mu-step>
                <mu-step>
                    <mu-step-label>
                        公司资质信息
                    </mu-step-label>
                </mu-step>
                <mu-step>
                    <mu-step-label>
                        系统审核
                    </mu-step-label>
                </mu-step>
            </mu-stepper>
            <div class="demo-step-content">
                <div class="protocol" v-if="activeStep === 0">
                    <div class="title">入驻协议</div>
                    <article class="article">
                        <p class="mrg">
                            感谢您对微芯城平台的信任和支持！为了更好地为您提供服务和明确您在微芯城的权利和义务，请您在提交入驻申请前仔细阅读、充分理解本协议，<b>您勾选同意后，协议即构成双方有约束力的法律文件</b>。
                        </p>
                        <h4>一、相关定义及解释</h4>
                        <p>1.微芯城：指运行于“采芯网FindIC（网址：www.findic.com）”网站的微芯城平台，为入驻商提供信息发布、产品推广及相关服务。</p>
                        <p class="mrg">2.商家注册及入驻：商家注册采芯网并依据微芯城入驻流程和要求完成在线信息提交，经平台审核同意后成为入驻商的过程。</p>

                        <h4>二、入驻条款的确认和接纳</h4>
                        <p>1.微芯城平台及服务的所有权和运作权归采芯网所有，您同意所有入驻协议条款、提交相关资质信息并通过平台审核，才能成为正式入驻商。</p>
                        <p class="mrg">2.您勾选同意协议，即视为确认享有平台服务的权利能力和行为能力，能够承担法律责任。</p>

                        <h4>三、商家入驻基本条件</h4>
                        <p>商家申请入驻微芯城，使用平台产品及服务，需满足以下条件：</p>
                        <p>1.商家同意本入驻协议及采芯网FindIC网站相关条款；</p>
                        <p>2.商家已依照中华人民共和国法律或依照其他本国法律注册并领取合法有效的营业执照及其他经营许可；</p>
                        <p>3.商家能够提供符合微芯城平台申请入驻要求的证明材料；</p>
                        <p>4.商家申请发布、推广的产品在平台指定范围内，且来源合法，资质齐全；</p>
                        <p class="mrg">5.商家无不良行为记录（包括但不限于知识产权投诉、贸易纠纷等）。</p>

                        <h4>四、微芯城平台权利及义务</h4>
                        <p>1.微芯城根据本协议向入驻商提供信息发布、产品推广平台及相应技术支持服务，尽力维护平台正常、稳定运行，并努力提升和改进技术，对平台功能和服务进行更新、升级，不断提升平台性能和交易率。</p>
                        <p>2.微芯城对入驻商在使用平台过程中遇到的问题及提出的建议和意见积极予以回复，可依入驻商需求对其提供合理的帮助和指导。</p>
                        <p>3.微芯城有权对商家的入驻信息，上传、发布的数据、信息、图片等相关内容进行监督检查，对发现任何虚假的、非法的、中伤他人的、侵犯他人合法权益或可能引起不正当竞争的信息资料，平台将保留不通知入驻商即进行编辑、修改、拒绝发布或立即删除的权利，并有权追究其违约、侵权责任或解除本协议。</p>
                        <p>4.对发现的问题或疑问，微芯城有权向入驻商发出询问及要求更改的通知，入驻商应在接到通知后立即做出说明或改正。</p>
                        <p>5.微芯城平台用户间合作过程中的互相评价会被记入双方的信用记录，如果入驻商存在不诚信行为，平台有权在网站公示，严重者将会被冻结、解除账户。</p>
                        <p class="mrg">6.微芯城对于商家履行本协议期间所获知的商业秘密负有保密义务，未经入驻商同意，平台不会向任何第三方（关联公司除外）泄露、给予或转让保密信息。当政府、司法机关依照程序要求平台披露信息，或为公共安全之目的提供入驻商资料等情况下的任何披露，微芯城平台不承担任何责任。</p>

                        <h4>五、入驻商承诺及行为义务</h4>
                        <p>1.商家申请入驻微芯城，须根据平台相关规则及要求提交证明文件或其他相关信息，包括但不限于营业执照、税务登记证、品牌授权证书等；</p>
                        <p>2.商家承诺向微芯城提供的上述证明文件或其他相关信息真实、合法、准确、有效，并保证上述证明文件或其他相关信息发生任何变更或更新时，及时通知微芯城；若上述文件变更或更新导致商家不符合本协议所规定入驻条件的，微芯城有权单方面全部或部分限制商家使用平台服务，直至终止本协议。</p>
                        <p>3.商家承诺在微芯城平台上传、发布的信息（包括但不限于数据、图片、文档、内容及相关信息）均合法真实存在，描述准确，数据真实，不夸大、不伪造，均不涉及侵害第三方利益。</p>
                        <p>4.商家承诺不上传、发布与产品不相关的广告等其他信息。</p>
                        <p class="mrg">5.商家承诺不在平台上发表反动、攻击、色情等性质的信息和内容；</p>

                        <h4>六、免责说明</h4>
                        <p>1.微芯城平台旨在为用户提供安全可靠的信息平台及优质的商务服务，如因入驻商登记、上传、发布的任何信息内容，给第三方造成直接或间接损失，或致使第三方对微芯城平台及其关联企业提起诉讼、仲裁或其他法律程序而产生的费用及遭受的损失，均由入驻商负责赔偿，微芯城平台不承担任何责任。</p>
                        <p>2.在微芯城平台上出现的任何与交易有关的纠纷，入驻商应直接与交易的另一方协商解决，微芯城平台不承担任何责任。</p>
                        <p>3.入驻商应采取有效措施防止其入驻账户信息的泄露，由于入驻商自身原因导致资料、数据、信息泄露而引起的一切责任及后果均由入驻商自行承担。</p>
                        <p class="mrg">4.鉴于计算机及互联网的特殊性，包括但不限于黑客、病毒、电信部门技术或政策调整等引起的事件，或微芯城平台为进行服务器配置、维护而短暂中断服务，或由于网络的阻塞造成服务延迟或中断，不属于微芯城平台违约，平台不承担违约责任。</p>

                        <h4>七、违规处罚</h4>
                        <p>1.库存失实。入驻商所发布的产品必须为原装正品，数量与实际库存量相符，否则记录为违规，违规记录累计超过2次，取消入驻资格。</p>
                        <p>2.价格虚假。供应商发布的产品价格必须是可即时交易的价格。否则记录为违规，违规记录累计超过2次，取消入驻资格。</p>
                        <p class="mrg">3.假冒伪劣。如入驻商被发现、被举报、被投诉出售假货、冒牌货、翻新货的，一经微芯城平台确认，立即取消入驻资格。</p>

                        <h4>八、其他</h4>
                        <h4>1.本协议的一切争议由双方协商解决，协商不成，任何一方均可向提供服务方所在地人民法院提起诉讼。</h4>
                        <h4>2.如果您对本入驻协议有任何疑问，请您联系平台在线客服或发送电子邮件至sabrina@findic.com与我们联系，我们会及时解决您的问题。</h4>
                    </article>
                    <mu-checkbox class="agree" v-model="input.agree" label="我已阅读并同意以上协议" />
                    <br>
                    <mu-button class="demo-step-button" color="primary" @click="handleNext">下一步</mu-button>
                </div>
                <div v-if="activeStep === 1">
                    <mu-form ref="form" :model="validateForm" class="mu-demo-form">
                        <mu-form-item label="用户名" help-text="帮助文字" prop="username" :rules="usernameRules">
                        <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
                        </mu-form-item>
                        <mu-form-item label="密码" prop="password" :rules="passwordRules">
                            <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
                        </mu-form-item>
                        <mu-form-item prop="isAgree" :rules="argeeRules">
                        <mu-checkbox label="同意用户协议" v-model="validateForm.isAgree"></mu-checkbox>
                        </mu-form-item>
                        <mu-form-item>
                        <mu-button color="primary" @click="submit">提交</mu-button>
                        <mu-button @click="clear">重置</mu-button>
                        </mu-form-item>
                    </mu-form>
                </div>
                <p v-if="finished">
                都完成啦!<a href="javascript:;" @click="reset">点这里</a>可以重置
                </p>
                <template v-if="!finished">
                <p>
                    {{content}}
                </p>
                <div>
                    <mu-button flat class="demo-step-button" :disabled="activeStep === 0" @click="handlePrev"> 上一步 </mu-button>
                    <mu-button class="demo-step-button" color="primary" @click="handleNext"> {{activeStep === 2 ? '完成' : '下一步'}} </mu-button>
                </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'item-list',
    title () {
        return '企业认证'
    },
    data () {
        return {
            activeStep: 1,
            input: {
                agree: false
            },
            usernameRules: [
                { validate: (val) => !!val, message: '必须填写用户名'},
                { validate: (val) => val.length >= 3, message: '用户名长度大于3'}
            ],
            passwordRules: [
                { validate: (val) => !!val, message: '必须填写密码'},
                { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
            ],
            argeeRules: [{ validate: (val) => !!val, message: '必须同意用户协议'}],
            validateForm: {
                username: '',
                password: '',
                isAgree: false
            }
        }
    },
    computed: {
        content () {
            let message = ''
            switch (this.activeStep) {
                case 0:
                break
                case 1:
                message = '创建群组，50人左右';
                break
                case 2:
                message = '多在群里发消息宣传宣传';
                break
                default:
                message = 'fuck! 又 TM 出错了！！！';
                break
            }
            return message
        },
        finished () {
            return this.activeStep > 2;
        }
    },
    methods: {
        handleNext () {
            this.activeStep++;
        },
        handlePrev () {
            this.activeStep--;
        },
        reset () {
            this.activeStep = 0;
        },
        submit () {
            this.$refs.form.validate().then((result) => {
                console.log('form valid: ', result)
            });
        },
        clear () {
            this.$refs.form.clear();
            this.validateForm = {
                username: '',
                password: '',
                isAgree: false
            };
        }
    }
}
</script>
