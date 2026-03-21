import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// 初始化 Stripe 客户端
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

/**
 * POST /api/webhook
 * Stripe 支付回调处理
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    // 验证 Stripe 签名
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error('Webhook 签名验证失败:', err);
    return NextResponse.json(
      { error: 'Webhook 签名验证失败' },
      { status: 400 }
    );
  }

  // 处理不同的事件类型
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      
      // 支付成功，处理订单
      await handleSuccessfulPayment(session);
      break;
    }

    case 'payment_intent.succeeded': {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      
      // 支付成功
      await handlePaymentSuccess(paymentIntent);
      break;
    }

    case 'payment_intent.payment_failed': {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      
      // 支付失败
      await handlePaymentFailure(paymentIntent);
      break;
    }

    case 'customer.subscription.created':
    case 'customer.subscription.updated':
    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription;
      
      // 处理订阅变更
      await handleSubscriptionChange(subscription, event.type);
      break;
    }

    default:
      console.log(`未处理的事件类型：${event.type}`);
  }

  // 返回成功响应
  return NextResponse.json({ received: true });
}

/**
 * 处理成功支付
 */
async function handleSuccessfulPayment(session: Stripe.Checkout.Session) {
  console.log('支付成功，Session ID:', session.id);
  
  // 获取用户信息和购买的产品
  const customerId = session.customer as string;
  const amountTotal = session.amount_total;
  const currency = session.currency;
  
  // 这里可以添加数据库记录逻辑
  // 例如：保存支付记录、解锁用户权限等
  
  console.log(`客户 ${customerId} 支付了 ${amountTotal} ${currency}`);
  
  // 可以发送确认邮件、更新用户状态等
}

/**
 * 处理 PaymentIntent 成功
 */
async function handlePaymentSuccess(paymentIntent: Stripe.PaymentIntent) {
  console.log('PaymentIntent 成功:', paymentIntent.id);
  
  // 更新订单状态、发送通知等
}

/**
 * 处理 PaymentIntent 失败
 */
async function handlePaymentFailure(paymentIntent: Stripe.PaymentIntent) {
  console.log('PaymentIntent 失败:', paymentIntent.id);
  
  // 记录失败原因、通知用户等
}

/**
 * 处理订阅变更
 */
async function handleSubscriptionChange(
  subscription: Stripe.Subscription,
  eventType: string
) {
  console.log(`订阅 ${eventType}:`, subscription.id);
  
  const customerId = subscription.customer as string;
  const status = subscription.status;
  
  // 根据事件类型处理
  if (eventType === 'customer.subscription.deleted') {
    console.log(`客户 ${customerId} 的订阅已取消`);
    // 取消用户权限
  } else {
    console.log(`客户 ${customerId} 的订阅状态：${status}`);
    // 更新用户权限
  }
}

// 如果需要 GET 请求用于测试
export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ message: 'Webhook endpoint is ready' });
}
























































































































